import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useOnCollectPoints } from "../hooks/useOnCollectPoints";
import { useGameContext } from "../game-context/useGameContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CloseGameModal: FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { onCollectPoints, isLoading } = useOnCollectPoints();
  const { gamePoints } = useGameContext();

  const onClickCollectButton = useCallback(() => {
    onCollectPoints({
      sfsCount: gamePoints,
      cb: onClose,
    });
  }, [gamePoints, onClose, onCollectPoints]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t("End game?")}</ModalHeader>
        <ModalFooter>
          <Button
            colorScheme="green"
            mr={3}
            onClick={onClickCollectButton}
            isLoading={isLoading}
          >
            {t("Collect points")}
          </Button>
          <Button
            colorScheme="red"
            mr={3}
            onClick={onClose}
            isDisabled={isLoading}
          >
            {t("Close")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
