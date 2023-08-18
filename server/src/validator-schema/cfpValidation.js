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

const createCfpSchema = {
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
        if (typeof JSON.parse(value) !== 'object') {
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
    isNumeric: true,
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
  logo: {
    in: ['body'],
    isString: true,
    optional: true,
  },
  link: {
    in: ['body'],
    isString: true,
    notEmpty: {
      errorMessage: 'Link cannot be empty',
    },
  },
  topics: {
    in: ['body'],
    custom: {
      options: (value) => {
        if (!Array.isArray(JSON.parse(value))) {
          throw new Error('Topics must be an array');
        }
        if (JSON.parse(value).length < 1) {
          throw new Error('Topics array must contain at least one item');
        }
        return true;
      },
      notEmpty: {
        errorMessage: 'Topics array must not be empty',
      },
    },
  },
  guidelines: {
    in: ['body'],
    isString: true,
    notEmpty: {
      errorMessage: 'Guidelines cannot be empty',
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

export const cfpValidationSchema = {
  idSchema,
  slugSchema,
  createCfpSchema,
  deleteSchema,
};
