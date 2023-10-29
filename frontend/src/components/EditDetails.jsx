import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  updateRestaurantDetailsAPI } from "../store/action";

function EditDetails({ element }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState(element);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  let dispatch = useDispatch();
  const handleOnChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(updateRestaurantDetailsAPI(formData));
    onClose();
  };

  return (
    <Box>
      <Button onClick={onOpen} size={"sm"} title={"Edit"}>
        <EditIcon />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} width={"800px"}>
        <ModalOverlay />
        <ModalContent width={"800px"}>
          <form onSubmit={handleOnSubmit}>
            <ModalHeader>Edit Restaurant details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <Flex gap={5}>
                  <FormControl id="image_url">
                    <FormLabel>Restaurant Image</FormLabel>
                    <Input
                      type="url"
                      name="poster"
                      value={formData.poster}
                      onChange={handleOnChange}
                      placeholder="Enter Restaurant Image"
                      required
                    />
                  </FormControl>
                  <FormControl id="title">
                    <FormLabel>Restaurant Title</FormLabel>
                    <Input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleOnChange}
                      placeholder="Enter title"
                      required
                    />
                  </FormControl>
                </Flex>
                <Flex gap={5}>
                  <FormControl id="director">
                    <FormLabel>Address</FormLabel>
                    <Input
                      type="text"
                      name="director"
                      value={formData.director}
                      onChange={handleOnChange}
                      placeholder="Enter Address"
                      required
                    />
                  </FormControl>
                  <FormControl id="year">
                    <FormLabel>Contact Details</FormLabel>
                    <Input
                      type="number"
                      name="year"
                      value={formData.year}
                      onChange={handleOnChange}
                      placeholder="Enter Details"
                      required
                    />
                  </FormControl>
                </Flex>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                isLoading={loading}
                spinnerPlacement="end"
                loadingText="Submiting data..."
                type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Update
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default EditDetails;
