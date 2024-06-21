import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useOnCollectPoints } from "../hooks/useOnCollectPoints";
import { useGameContext } from "../GameContext/useGameContext";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CloseGameModal: FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { onCollectPoints, isLoading } = useOnCollectPoints();
  const { gamePoints, resetPoints } = useGameContext();

  const onCloseModal = useCallback(() => {
    onClose();
    resetPoints();
    // navigate("/");
  }, [onClose, resetPoints]);

  const onClickCollectButton = useCallback(() => {
    onCollectPoints({
      sfsCount: gamePoints,
      cb: onCloseModal,
    });
  }, [gamePoints, onCloseModal, onCollectPoints]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent color="blackAlpha.900">
        <ModalHeader>{t("Game end")}</ModalHeader>
        <ModalBody>
          {gamePoints > 0 && (
            <Flex gap={4}>
              <Text>{t("Points")}</Text>
              <Text>{gamePoints}</Text>
            </Flex>
          )}
        </ModalBody>
        <ModalFooter>
          {gamePoints > 0 ? (
            <Button
              colorScheme="green"
              mr={3}
              onClick={onClickCollectButton}
              isLoading={isLoading}
            >
              {t("Collect points")}
            </Button>
          ) : (
            <Button
              colorScheme="red"
              mr={3}
              onClick={onCloseModal}
              isDisabled={isLoading}
            >
              {t("Close")}
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
