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
    await sleep(10)
    var data = dataByDay[currDay] || {}
    var t1 = performance.now()
    var out1 = await getSolutionOutput(data.part1)
    outputs = [out1, '']
    times = [formatTime(t1), '']
    colorKnownGood(1, out1)
    await sleep(10)
    var t2 = performance.now()
    var out2 = await getSolutionOutput(data.part2)
    outputs = [outputs[0], out2]
    times = [times[0], formatTime(t2)]
    colorKnownGood(2, out2)
    busy = false
  }

  async function getSolutionOutput(fn) {
    if (!fn) return ''
    try {
      return fn(input)
    } catch (err) {
      var out = String(err)
      var re = /:(\d+:\d+)\)/.exec(err.stack || '')
      if (re) out = `(${re[1]}) ${out}`
      return out
    }
  }

  function formatTime(t) {
    return `(${Math.round(performance.now() - t)}ms)`
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

  function onInput(input) {
    if (input) runSolutions()
  }
  $: onInput(input)

  function setInputType(test) {
    useTestInput = !!test
    setDay()
  }

  function colorKnownGood(part, output, known) {
    var known = dataByDay[currDay].knownAnswers || []
    var ix = part === 1 ? 0 : 2
    if (!useTestInput) ix++
    var ans = String(known[ix] || '')
    var good = !!(ans && ans === String(output))
    answersKnownGood[part - 1] = good
    answersKnownGood = answersKnownGood
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
</style>
