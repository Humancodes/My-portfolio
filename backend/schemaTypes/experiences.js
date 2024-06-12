export default {
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'smonth',
      title: 'Starting Month',
      type: 'string',
    },
    {
      name: 'emonth',
      title: 'Ending Month',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{type: 'workExperience'}],
    },
  ],
}
