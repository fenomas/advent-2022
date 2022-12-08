<script>
  /**
   *
   *    state
   *
   */
  var dayNumList = []
  var currDay = 'xx'
  var output1 = ''
  var output2 = ''
  var input = ''
  var time1 = '1ms'
  var time2 = '1ms'

  /**
   *
   *    imports and HMR
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
        onInput()
      }
    })
  }

  /**
   *
   *    module running logic
   *
   */
  function runPart(part = 1) {
    if (busy[part]) return
    var data = dataByDay[currDay] || {}
    var fn = part === 1 ? data.part1 : data.part2
    if (!fn) return
    busy[part] = true
    setTimeout(() => {
      var t = performance.now()
      var out = '(error)'
      try {
        out = fn(input)
      } catch (err) {
        out = String(err)
      }
      setOutput(part, out, performance.now() - t)
      busy[part] = false
    })
  }
  var busy = [false, false, false]

  /**
   *
   *    view
   *
   */
  function setDay(day = '') {
    if (day) currDay = day
    input = dataByDay[day].input
  }

  function onInput(input) {
    runPart(1)
    runPart(2)
  }
  $: onInput(input)

  function setOutput(part, out, dt) {
    var time = `(${Math.round(dt)}ms)`
    if (part === 1) output1 = out
    if (part === 1) time1 = time
    if (part === 2) output2 = out
    if (part === 2) time2 = time
  }

  setTimeout(() => {
    setDay(dayNumList[dayNumList.length - 1])
    onInput()
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
      <div class="time">{time1}</div>
    </div>
    <textarea name="output1" id="output1" bind:value={output1} rows="1" />

    <div class="label">
      <h4>Output 2:</h4>
      <div class="time">{time2}</div>
    </div>
    <textarea name="output2" id="output2" bind:value={output2} rows="1" />

    <div class="label" style="align-self: flex-start;">
      <h4>Input:</h4>
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
</style>
