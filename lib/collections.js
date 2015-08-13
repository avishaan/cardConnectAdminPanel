Questions = new orion.collection('posts', {
  singularName: 'question',
  pluralName: 'questions',
  link: {
    title: 'Questions'
  },
  // Tabular settings for this collection
  tabular: {
    // pick data columns that appear in the CMS portal
    columns: [
      {
        data: "question",
        title: "Question"
      }, {
        data: "isAdult",
        title: "Adult?"
      }

    ]
  }
});

Questions.attachSchema(new SimpleSchema({
  question: {
    label: "Question Text",
    type: String
  },
  isAdult: {
    label: "Adult Question?",
    type: Boolean
  }
}
));
