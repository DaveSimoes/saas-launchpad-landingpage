"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";
import { Link } from "@heroui/link";

export default function Hero() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="relative justify-center items-center">
      <section className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, type: "spring", bounce: 0 }}
          className="flex flex-col justify-center items-center space-y-5 max-w-4xl mx-auto text-center">
          <span className="w-fit h-full text-sm bg-card px-2 py-1 border border-border rounded-full">
            New template!
          </span>
          <h1 className="text-4xl font-medium tracking-tighter mx-auto md:text-6xl text-pretty bg-gradient-to-b from-sky-800 dark:from-sky-100 to-foreground dark:to-foreground bg-clip-text text-transparent">
            Launchpad is a Beautiful Landing Page Template for SaaS Startups
          </h1>
          <p className="max-w-2xl text-lg mx-auto text-muted-foreground text-balance">
            Launchpad helps you to create your next landing page using this free
            template.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Button onPress={onOpen} color="primary" variant="shadow">
              See more
            </Button>
            <Modal
              isOpen={isOpen}
              placement="center"
              onOpenChange={onOpenChange}>
              <ModalContent>
                <ModalHeader>David De Paiva</ModalHeader>
                <ModalBody>
                  Feel free to visit my profile and check my work at Linkedin 🪪
                </ModalBody>
                <ModalFooter>
                  <Button
                    as={Link}
                    href="https://www.linkedin.com/in/dspaivadev/"
                    color="primary"
                    variant="solid"
                    size="sm">
                    Connect on{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </motion.div>
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", bounce: 0 }}
        className="w-full h-full absolute -top-32 flex justify-end items-center pointer-events-none ">
        <div className="w-3/4 flex justify-center items-center">
          <div className="w-12 h-[600px] bg-light blur-[70px] rounded-3xl max-sm:rotate-[15deg] sm:rotate-[35deg] [will-change:transform]"></div>
        </div>
      </motion.div>
    </div>
  );
}
