import axios from 'axios';

const Types = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

const Actions = {
  openModal: () => ({
    type: Types.OPEN_MODAL,
  }),
  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  })
};

export {
  Types,
  Actions,
};
