export default function Form({ handleChange, handleSubmit, formData, submitText }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" name="title" onChange={handleChange} value={formData.title} data-testid="note-input-title" />
      <label htmlFor="comment">Comment</label>
      <textarea id="comment" name="comment" onChange={handleChange} value={formData.comment} data-testid="note-input-comment"></textarea>
      <label htmlFor="note">Note (.../20)</label>
      <input id="note" type="number" name="note" min={0} max={20} onChange={handleChange} value={formData.note} data-testid="note-input-number" />
      <button type="submit" data-testid="note-submit">{submitText}</button>
    </form>
  )
}
