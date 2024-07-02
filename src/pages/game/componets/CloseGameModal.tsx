import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useOnCollectPoints } from "../hooks/useOnCollectPoints";
import { useGameContext } from "../GameContext/useGameContext";
import { useDecreaseAttempts } from "../hooks/useDecreaseAttempts";
import style from "../game.module.css";
import { BigCupIcon } from "src/shared/components/icons/BigCupIcon";
import { useCalculateGameAttempts } from "src/entities/game/useCalculateGameAttempts";
import { useNavigate } from "react-router-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CloseGameModal: FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { onCollectPoints, isCollectPointsLoading } = useOnCollectPoints();
  const { decreaseAttempts, isLoadingDecreaseAttempts } = useDecreaseAttempts();

  const navigate = useNavigate();

  const { attempts, isGameAttemptsLoading } = useCalculateGameAttempts();

  const { gamePoints, resetPoints } = useGameContext();

  const onCloseModal = useCallback(() => {
    onClose();
    resetPoints();
  }, [onClose, resetPoints]);

  const onCloseModalToMain = useCallback(async () => {
    await onCollectPoints({
      sfsCount: gamePoints,
    });
    await decreaseAttempts();
    onCloseModal();
    navigate("/");
  }, [decreaseAttempts, gamePoints, navigate, onCloseModal, onCollectPoints]);

  const onClickCollectButton = useCallback(async () => {
    await onCollectPoints({
      sfsCount: gamePoints,
    });
    await decreaseAttempts();
    onCloseModal();
  }, [gamePoints, onCloseModal, onCollectPoints, decreaseAttempts]);

  const isLoading = isCollectPointsLoading || isLoadingDecreaseAttempts;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        h={500}
        w="90%"
        borderRadius="30px"
        bgColor="black"
        border="2px solid #9e6823"
      >
        <ModalBody>
          <Flex
            h="100%"
            direction="column"
            align="center"
            justify="space-between"
            py={42}
          >
            {gamePoints > 0 && !isGameAttemptsLoading ? (
              <>
                <Box
                  className={`${style.gameModalTextGradient} ${style.gameText}`}
                  fontSize={40}
                >
                  {t("CONGRATS!")}
                </Box>
                <Flex direction="column" align="center">
                  <Flex align="center" justify="center">
                    <Box
                      className={`${style.gameModalTextGradient} ${style.gameText}`}
                      fontSize={96}
                      lineHeight="80px"
                    >
                      {gamePoints}
                    </Box>
                    <BigCupIcon />
                  </Flex>
                  <Box
                    className={`${style.gameModalTextGradient} ${style.gameText}`}
                    fontSize={32}
                  >
                    {t("you reward")}
                  </Box>
                </Flex>
                {attempts ? (
                  <Flex direction="column" align="center" gap={2}>
                    <Button
                      className={style.gameText}
                      fontWeight="normal"
                      fontSize={20}
                      w={180}
                      h={50}
                      borderRadius={45}
                      bg="linear-gradient(180deg, #D2A245 0%, #F7CF5E 16%, #9E6823 58%, #C79F4C 100%);"
                      onClick={onClickCollectButton}
                      isLoading={isLoading}
                    >
                      {t("PLAY AGAIN")}
                    </Button>
                    <Box
                      className={`${style.gameModalTextGradient} ${style.gameText}`}
                      fontSize={20}
                    >
                      {t(`you have ${attempts} attempts`)}
                    </Box>
                  </Flex>
                ) : (
                  <Flex direction="column" align="center" gap={2}>
                    <Button
                      className={style.gameText}
                      fontWeight="normal"
                      fontSize={20}
                      w={180}
                      h={50}
                      borderRadius={45}
                      bg="linear-gradient(180deg, #D2A245 0%, #F7CF5E 16%, #9E6823 58%, #C79F4C 100%);"
                      onClick={onCloseModalToMain}
                      isLoading={isLoading}
                    >
                      {t("ClOSE GAME")}
                    </Button>
                    <Box
                      className={`${style.gameModalTextGradient} ${style.gameText}`}
                    >
                      {t("or")}
                    </Box>
                    <Button
                      className={style.gameText}
                      fontWeight="normal"
                      fontSize={20}
                      w={180}
                      h={50}
                      borderRadius={45}
                      bg="linear-gradient(180deg, #D2A245 0%, #F7CF5E 16%, #9E6823 58%, #C79F4C 100%);"
                    >
                      {t("INVITE (+4 att)")}
                    </Button>
                    <Box
                      className={`${style.gameModalTextGradient} ${style.gameText}`}
                      fontSize={20}
                    >
                      {t(`you have ${attempts} attempts`)}
                    </Box>
                  </Flex>
                )}
              </>
            ) : (
              <>
                <Box
                  className={`${style.gameModalTextGradient} ${style.gameText}`}
                  fontSize={40}
                >
                  {t("GAME OVER")}
                </Box>
                <Flex direction="column" align="center">
                  <Flex align="center" justify="center">
                    <Box
                      className={`${style.gameModalTextGradient} ${style.gameText}`}
                      fontSize={96}
                      lineHeight="80px"
                    >
                      {gamePoints}
                    </Box>
                    <BigCupIcon />
                  </Flex>
                  <Box
                    className={`${style.gameModalTextGradient} ${style.gameText}`}
                    fontSize={32}
                  >
                    {t("you reward")}
                  </Box>
                </Flex>
                {attempts ? (
                  <Flex direction="column" align="center" gap={2}>
                    <Button
                      className={style.gameText}
                      fontWeight="normal"
                      fontSize={20}
                      w={180}
                      h={50}
                      borderRadius={45}
                      bg="linear-gradient(180deg, #D2A245 0%, #F7CF5E 16%, #9E6823 58%, #C79F4C 100%);"
                      onClick={onClickCollectButton}
                      isLoading={isLoading}
                    >
                      {t("PLAY AGAIN")}
                    </Button>
                    <Box
                      className={`${style.gameModalTextGradient} ${style.gameText}`}
                      fontSize={20}
                    >
                      {t(`you have ${attempts} attempts`)}
                    </Box>
                  </Flex>
                ) : (
                  <Flex direction="column" align="center" gap={2}>
                    <Button
                      className={style.gameText}
                      fontWeight="normal"
                      fontSize={20}
                      w={180}
                      h={50}
                      borderRadius={45}
                      bg="linear-gradient(180deg, #D2A245 0%, #F7CF5E 16%, #9E6823 58%, #C79F4C 100%);"
                      onClick={onCloseModalToMain}
                      isLoading={isLoading}
                    >
                      {t("ClOSE GAME")}
                    </Button>
                    <Box
                      className={`${style.gameModalTextGradient} ${style.gameText}`}
                    >
                      {t("or")}
                    </Box>
                    <Button
                      className={style.gameText}
                      fontWeight="normal"
                      fontSize={20}
                      w={180}
                      h={50}
                      borderRadius={45}
                      bg="linear-gradient(180deg, #D2A245 0%, #F7CF5E 16%, #9E6823 58%, #C79F4C 100%);"
                    >
                      {t("INVITE (+4 att)")}
                    </Button>
                    <Box
                      className={`${style.gameModalTextGradient} ${style.gameText}`}
                      fontSize={20}
                    >
                      {t(`you have ${attempts} attempts`)}
                    </Box>
                  </Flex>
                )}
              </>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
