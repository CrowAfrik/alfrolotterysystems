export default {
    name: 'news',
    type: 'document',
    title: 'News',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of the Event',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Breif Description about the event',
      },
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        },
      },
    ],
  };