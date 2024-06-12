export default {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'mainImg',
      title: 'Profile Pic',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
