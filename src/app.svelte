<script>
  var sleep = (ms) => new Promise((r) => setTimeout(r, ms))

  /**
   *
   *    state
   *
   */
  var dayNumList = []
  var currDay = 'xx'
  var input = ''
  var useTestInput = false
  var catchErrors = true
  var outputs = ['', '']
  var times = ['', '']
  var answersKnownGood = [false, false]

  /**
   *
   *
   *
   *    imports and HMR
   *
   *
   *
   */
  import { getDataByDay } from './advent/importer'
  var dataByDay = getDataByDay()
  var makeDaysList = () => {
    return Object.keys(dataByDay)
      .filter((day) => !!dataByDay[day].part1)
      .sort()
  }
  dayNumList = makeDaysList()

  if (import.meta.hot) {
    import.meta.hot.accept('./advent/importer', (mod) => {
      if (mod && mod.getDataByDay) {
        dataByDay = mod.getDataByDay()
        dayNumList = makeDaysList()
        runSolutions()
      }
    })
  }

  /**
   *
   *
   *
   *    module running logic
   *
   *
   *
   */

  var busy = false
  async function runSolutions() {
    if (busy) return
    busy = true
    outputs = ['', '']
    times = ['', '']
    await sleep(5)
    var [out1, t1] = await getSolutionOutput(currDay, 1, input)
    renderOutput(1, out1, t1, currDay)
    await sleep(5)
    var [out2, t2] = await getSolutionOutput(currDay, 2, input)
    renderOutput(2, out2, t2, currDay)
    busy = false
  }

  async function getSolutionOutput(day = '', part = 1, input = '') {
    var t0 = performance.now()
    var fn = (dataByDay[day] || {})['part' + part]
    if (!fn) return ['', 0]
    if (!catchErrors) {
      return [fn(input), performance.now() - t0]
    } else {
      try {
        return [fn(input), performance.now() - t0]
      } catch (err) {
        var out = String(err)
        var re = /:(\d+:\d+)\)/.exec(err.stack || '')
        if (re) out = `(${re[1]}) ${out}`
        return [out, performance.now() - t0]
      }
    }
  }

  function renderOutput(part = 1, output = '', time = 0, day = '') {
    outputs[part - 1] = output
    times[part - 1] = `(${Math.round(time)}ms)`
    outputs = outputs
    times = times
    if (day) {
      answersKnownGood[part - 1] = outputIsKnownGood(day, part, output)
      answersKnownGood = answersKnownGood
    }
  }

  async function runAllSolutions() {
    if (busy) return
    busy = true
    var strs = ['', '']
    var dts = [0, 0]
    var allGood = [true, true]
    dayNumList.forEach(async (dayStr) => {
      for (var part = 1; part <= 2; part++) {
        if (!(dayStr in dataByDay)) throw ''
        var dat = dataByDay[dayStr] || {}
        var inStr = useTestInput ? dat.testInput : dat.input
        var [out, dt] = await getSolutionOutput(dayStr, part, inStr)
        var isGood = outputIsKnownGood(dayStr, part, out)
        allGood[part - 1] &&= isGood
        strs[part - 1] += isGood ? '★' : 'ー'
        dts[part - 1] += dt
        renderOutput(part, strs[part - 1], dts[part - 1])
        await sleep(5)
      }
    })
    answersKnownGood = allGood
    busy = false
  }

  function outputIsKnownGood(day = '', part = 1, output = '') {
    var known = dataByDay[day].knownAnswers || []
    var ix = part === 1 ? 0 : 2
    if (!useTestInput) ix++
    var ans = String(known[ix] || '')
    return !!(ans && ans === String(output))
  }

  /**
   *
   *
   *
   *    view and bindings
   *
   *
   *
   */
  function setDay(day = '') {
    if (day) currDay = day
    var dat = dataByDay[currDay]
    input = useTestInput ? dat.testInput : dat.input
    runSolutions()
  }

  function onInput(input = '') {
    if (input) runSolutions()
  }
  $: onInput(input)

  function setInputType(test) {
    useTestInput = !!test
    setDay()
  }

  function getOutputRows(str) {
    var lines = String(str || '').split('\n').length
    return Math.min(lines, Math.max(lines, 1, 10))
  }

  setTimeout(() => {
    setDay(dayNumList[dayNumList.length - 1])
    runSolutions()
  }, 100)
</script>

<!-- 







-->
<div class="outer">
  <h2>Advent 2022</h2>
  <div class="layout">
    <div class="label">
      <h4>Days:</h4>
    </div>
    <div class="day-list">
      {#each dayNumList as day}
        <span
          class="button"
          class:current={day === currDay}
          on:keydown={() => {}}
          on:click={() => setDay(day)}>{day}</span
        >
      {/each}
      {#if dayNumList.length === 25}
        <span
          class="button run-all-button"
          on:keydown={() => {}}
          on:click={runAllSolutions}>run all</span
        >
      {/if}
    </div>

    <div class="label">
      <h4>Output 1:</h4>
      <div class="time">{times[0]}</div>
    </div>
    <textarea
      name="output1"
      id="output1"
      bind:value={outputs[0]}
      class:known-good={answersKnownGood[0]}
      rows={getOutputRows(outputs[0])}
    />

    <div class="label">
      <h4>Output 2:</h4>
      <div class="time">{times[1]}</div>
    </div>
    <textarea
      name="output2"
      id="output2"
      bind:value={outputs[1]}
      class:known-good={answersKnownGood[1]}
      rows={getOutputRows(outputs[1])}
    />

    <div class="label" style="align-self: flex-start;">
      <h4>Input:</h4>
      <br />
      <span
        class="button input-toggle"
        class:current={!useTestInput}
        on:keydown={() => {}}
        on:click={() => setInputType(false)}>Real</span
      >
      <span
        class="button input-toggle"
        class:current={useTestInput}
        on:keydown={() => {}}
        on:click={() => setInputType(true)}>Test</span
      >
    </div>
    <textarea name="input" id="input" bind:value={input} rows="14" />
    <div />
    <div class="catch-area">
      Catch errors
      <span
        class="button input-toggle catch-button"
        class:current={catchErrors}
        on:keydown={() => {}}
        on:click={() => {
          catchErrors = !catchErrors
        }}>x</span
      >
    </div>
  </div>
</div>

<!-- 


-->
<style lang="css">
  .outer {
    padding: 0;
    margin: 3em auto;
    width: 90%;
    min-width: 20em;
    max-width: 34em;
  }

  .layout {
    display: grid;
    grid-template: auto / max-content 1fr;
    align-items: center;
    justify-items: flex-start;
    gap: 0.6em;
  }

  .label {
    margin: 0.7em;
  }
  .label > h4 {
    margin: 0;
  }

  .button {
    display: inline-block;
    margin: 0.2em;
    border-radius: 5px;
    padding: 4px 0.4em 3px;
    cursor: pointer;
    color: #090;
    border: solid 1px #090;
  }

  .button:hover {
    box-shadow: 0 0 4px 2px #090;
  }

  .button.current {
    background-color: #090;
    color: #112;
  }

  .input-toggle {
    display: block;
    margin: 0.5em 0 0;
    padding: 2px 0.4em 1px;
  }

  .time {
    font-size: 80%;
    position: absolute;
  }

  textarea {
    font-family: monospace;
    font-size: 110%;
    width: 95%;
    padding: 0.4em;
    border-radius: 5px;
    color: #ccc;
    border-color: #777;
    background-color: #10101a;
  }

  .known-good {
    color: #0a0;
  }

  .catch-area {
    color: #999;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .catch-button {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    text-align: center;
    line-height: 1.2em;
    margin: 0.2em 0.5em;
    padding: 0;
  }
  .run-all-button {
    margin-left: 2em;
  }
</style>
