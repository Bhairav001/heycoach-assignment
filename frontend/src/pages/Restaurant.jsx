import {
    Box,
    Button,
    Divider,
    Grid,
    GridItem,
    Heading,
    Image,
    Select,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantDetailsAPI } from "../store/action";
import { useNavigate } from "react-router";
import { addRestaurantDetailsAPI } from "../store/action";
import RestaurantTable from "../components/RestaurantTable";
const initialData = {
    poster: "",
    title: "",
    director: "",
    year: "",
    genre: "",
    IMDB_Rating: "",
    ticket: "",
};
const Restaurant = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state);


    useEffect(() => {
        if (data.length == 0) {
            dispatch(getRestaurantDetailsAPI());
        }
    }, [data]);



    //
    const [formData, setFormData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
    //   let dispatch = useDispatch();
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
        dispatch(addRestaurantDetailsAPI(formData));
    };
    return (
        <Flex>
            <RestaurantTable/>
            <Flex
                align={"center"}
                justify={"center"}

            //   bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Stack spacing={8} py={6} px={6} maxWidth={"container.sm"}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"}>Add new Restaurant details</Heading>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={"lg"}
                        p={8}
                    >
                        <form onSubmit={handleOnSubmit}>
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
                                        <FormLabel>Restaurant Name</FormLabel>
                                        <Input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleOnChange}
                                            placeholder="Enter Restaurant Name"
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
                                            placeholder="Enter Contact"
                                            required
                                        />
                                    </FormControl>
                                </Flex>
                                <Stack spacing={10}>
                                    <Button
                                        isLoading={loading}
                                        spinnerPlacement="end"
                                        loadingText="Submiting data..."
                                        type="submit"
                                        bg={"blue.400"}
                                        color={"white"}
                                        _hover={{
                                            bg: "blue.500",
                                        }}
                                        mt={"30px"}
                                    >
                                        Submit
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </Flex>
    );
};

export default Restaurant;