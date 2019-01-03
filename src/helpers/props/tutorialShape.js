import PropTypes from 'prop-types';

const tutorialShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

const tutorialOptionalShape = PropTypes.oneOfType([
  PropTypes.shape({
    nope: PropTypes.string.isRequired,
  }),
  tutorialShape,
]);

export default { tutorialShape, tutorialOptionalShape };
