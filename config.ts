const configJson = {
  componentGroup: [
    {
      title: '',
      components: [
        {
          type: 'INPUT',
          label: 'invitation Code',
          value: 'invitationCode',
          required: true,
          validator: `(value) => {
            ...
          }`,
        },
      ],
    },
    {
      title: 'Legal Entity Type',
      components: [
        {
          // 业务组件
          type: 'UK_COMP',
          label: 'UKCompanyInfo',
          value: {
            region: 'UK',
            companyName: 'company',
            // ...
          },
        },
      ],
    },
    {
      title: 'Ultimate Beneficial Owner',
      components: [
        {
          type: 'SELECT',
          label: 'ID Type',
          value: 'IDType',
          options: [
            {
              label: 'options1',
              value: 'value1',
            },
            {
              label: 'options2',
              value: 'value2',
            },
          ],
          required: true,
          validator: `(value) => {
            ...
          }`,
        },
        {
          type: 'UPLOAD',
          label: 'ID Photos',
          value: 'IDPhotos',
          required: true,
          validator: `(value) => {
            ...
          }`,
        },
        {
          // ...
        },
      ],
    },
  ],
}
