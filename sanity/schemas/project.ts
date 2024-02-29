import { defineField, defineType } from 'sanity';

const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
            {
              type: 'image',
            
        options: {hotspot: true},
        fields: [
            {
                name: 'alt',
                title: 'Alt',
                type: 'string'
            }
        ]
        }]}),
    defineField({
      name: 'url',
      title: 'Url',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});

export default project;
