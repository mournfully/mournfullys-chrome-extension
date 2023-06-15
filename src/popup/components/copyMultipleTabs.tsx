import { Component } from 'solid-js'

const CopyMultipleTabs: Component = () => {
  const handleSubmit = (event: Event): void => {
    // event.preventDefault()
    // submit(form)
    console.log(`CopyTabs: handleSubmit`)
  }

  return (
    <div>
      <label for="copyForm">Copy titles and urls into clipboard:</label>
      <form onSubmit={handleSubmit}>
        <input type="radio" name="format" id="markdown" /><label for="markdown">[title](url)</label>
        <input type="radio" name="format" id="base" /><label for="base">title - url</label>
        <input type="radio" name="format" id="url" /><label for="url">url</label>
        <input type="radio" name="format" id="title" /><label for="title">title</label>
        <br />
        <input type="radio" name="scope" id="single" /><label for="single">current</label>
        <input type="radio" name="scope" id="all" /><label for="all">all</label>
        <input type="radio" name="scope" id="rightward" /><label for="rightward">rightwards</label>
        <input type="radio" name="scope" id="leftward" /><label for="leftward">leftwards</label>
        <br />
        <button type="submit" tabindex="6">Copy</button>
      </form>
    </div>
  )
}

export default CopyMultipleTabs
