import readingTime from 'reading-time';

module.exports = {
  beforeCreate(event) {
    if (event.params.data.content) {
      event.params.data.readingTime =
        readingTime(event.params.data.content)?.text || null;
    }
  },

  beforeUpdate(event) {
    if (event.params.data.content) {
      event.params.data.readingTime =
        readingTime(event.params.data.content)?.text || null;
    }
  },
};
