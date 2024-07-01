import React from 'react';

import { Box, Modal } from '@mui/material';

import Button from '../../common/Buttons/TypeOfButton';
import { IModal } from '../../types/types';
import { removeCurrentResult } from '../../store/ResultSlice';
import { useAppDispatch } from '../../store/store';
import { removeStructureAndDataTest } from '../../store/QuestionsSlice';
import { AppRoutes } from '../../enums/enums';

export default function ModalWindow({ modal, handleClick }: IModal) {
  const dispatch = useAppDispatch();

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const clearCurrentResult = () => {
    handleClick();
    dispatch(removeCurrentResult());
    dispatch(removeStructureAndDataTest());
  };

  return (
    <React.Fragment>
      <Modal
        disableEscapeKeyDown={true}
        open={modal}
        onClose={handleClick}
        aria-describedby='parent-modal-description'
      >
        <Box sx={{ ...style, width: 400, textAlign: 'center' }}>
          <p id='parent-modal-description'>Do you want to finish test?</p>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Button link={AppRoutes.ROOT} handleClick={clearCurrentResult}>
              Confirm
            </Button>
            <Button handleClick={handleClick}>Cancel</Button>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}