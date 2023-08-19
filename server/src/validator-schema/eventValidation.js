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
  organizer: { in: ['body'], isString: true, notEmpty: true },
  description: { in: ['body'], isString: true, notEmpty: true },

  address: {
    in: ['body'],
    custom: {
      options: (value) => {
        // console.log(
        //   JSON.parse(value).isOnline,
        //   JSON.parse(value).location,
        //   JSON.parse(value).location.length,
        //   JSON.parse(value).location.length === 0
        // );
        if (
          typeof JSON.parse(value) !== 'object' ||
          Array.isArray(JSON.parse(value))
        ) {
          throw new Error('Address must be an object');
        }
        if (
          JSON.parse(value).isOnline === false &&
          JSON.parse(value).location.length === 0
        ) {
          throw new Error('If event is offline it should have a location');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'Address cannot be empty',
    },
  },
  image: {
    in: ['body'],
    isString: true,
    // custom: {
    //   options: (value) => {
    //     if (!/\.(png|jpg|jpeg)$/.test(value)) {
    //       throw new Error('Image must have a valid extension png, jpg, jpeg');
    //     }
    //     return true;
    //   },
    // },
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
  time: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/^\d{2}:\d{2}$/.test(value)) {
          throw new Error('Invalid time value');
        }
        const [hours, minutes] = value.split(':').map(Number);
        if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
          throw new Error('Invalid time value');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'Time cannot be empty',
    },
  },
  duration: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!/^\d+$/.test(value)) {
          throw new Error('Invalid duration value');
        }
        if (Number(value) < 1) {
          throw new Error('Duration must be greater than 0');
        }
        return true;
      },
    },
    notEmpty: {
      errorMessage: 'duration cannot be empty',
    },
  },
  tags: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(JSON.parse(value))) {
          throw new Error('Tags must be an array');
        }
        if (JSON.parse(value).length < 1) {
          throw new Error('Tags array must contain at least one item');
        }
        return true;
      },
      notEmpty: {
        errorMessage: 'Tags array must not be empty',
      },
    },
  },
  speakers: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(JSON.parse(value))) {
          throw new Error('Speakers must be an array');
        }
        if (JSON.parse(value).length < 1) {
          throw new Error('Speakers array must contain at least one item');
        }
        JSON.parse(value).forEach((speaker) => {
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
    notEmpty: {
      errorMessage: 'Speakers cannot be empty',
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
    custom: {
      options: (value) => {
        if (!Array.isArray(JSON.parse(value))) {
          throw new Error('Sponsors must be an array');
        }
        return true;
      },
      optional: true,
    },
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
