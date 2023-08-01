const idSchema = {
  id: {
    in: ['params'],
    isString: {
      errorMessage: 'Invalid id',
    },
    notEmpty: {
      errorMessage: 'id cannot be empty',
    },
  },
};

const slugSchema = {
  slug: {
    in: ['params'],
    isString: {
      errorMessage: 'Invalid slug',
    },
    notEmpty: {
      errorMessage: 'Slug cannot be empty',
    },
  },
};

const createEventSchema = {
  name: {
    in: ['body'],
    isLength: {
      options: { min: 2 },
      errorMessage: 'Name must be at least 2 characters long',
    },
    notEmpty: {
      errorMessage: 'Name cannot be empty',
    },
  },
  slug: { in: ['body'], isString: true, notEmpty: true },
  organizer: { in: ['body'], isString: true, notEmpty: true },
  description: { in: ['body'], isString: true, notEmpty: true },

  address: {
    in: ['body'],
    isObject: true,
    notEmpty: {
      errorMessage: 'address cannot be empty',
    },
  },
  'address.isOnline': {
    in: ['body'],
    isBoolean: {
      errorMessage: 'Invalid value for isOnline',
    },
    notEmpty: {
      errorMessage: 'isOnline cannot be empty',
    },
  },
  'address.location': {
    in: ['body'],
    isString: {
      errorMessage: 'Invalid location value',
    },
    notEmpty: {
      errorMessage: 'location cannot be empty',
    },
  },
  image: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/\.(png|jpg|jpeg)$/.test(value)) {
          throw new Error('Image must have a valid extension png, jpg, jpeg');
        }
        return true;
      },
    },
    optional: true,
  },
  date: {
    in: ['body'],
    isDate: {
      errorMessage: 'Invalid date value',
    },
    notEmpty: {
      errorMessage: 'date cannot be empty',
    },
  },
  duration: {
    in: ['body'],
    isNumeric: {
      errorMessage: 'Invalid duration value',
    },
    notEmpty: {
      errorMessage: 'duration cannot be empty',
    },
  },
  tags: {
    in: ['body'],
    isArray: {
      errorMessage: 'Tags must be an array',
      options: { min: 1 },
    },
    notEmpty: {
      errorMessage: 'Tags array must not be empty',
    },
  },
  speakers: {
    in: ['body'],
    isArray: {
      errorMessage: 'Speakers must be an array',
      options: { min: 1 },
    },
    notEmpty: {
      errorMessage: 'Speakers array must not be empty',
    },
    custom: {
      options: (value) => {
        value.forEach((speaker) => {
          if (!speaker.name || !speaker.profile || !speaker.designation) {
            throw new Error(
              'Each speaker must have a name, profile, and designation'
            );
          }
          if (speaker.socials && !Array.isArray(speaker.socials)) {
            throw new Error('Socials must be an array');
          }
        });
        return true;
      },
    },
  },
  requiresTicket: {
    in: ['body'],
    isBoolean: {
      errorMessage: 'Invalid value for requiresTicket',
    },
    notEmpty: {
      errorMessage: 'requiresTicket cannot be empty',
    },
  },
  sponsors: {
    in: ['body'],
    isArray: {
      errorMessage: 'Sponsors must be an array',
      options: { min: 1 },
    },
    optional: true,
  },
};

const deleteSchema = {
  id: {
    in: ['body'],
    isString: true,
    optional: true,
  },
};

export const eventValidationSchema = {
  idSchema,
  slugSchema,
  createEventSchema,
  deleteSchema,
};
