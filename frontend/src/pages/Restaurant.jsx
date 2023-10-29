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
        if (formData.genre == "") {
            toast({
                title: "Please select Restaurant type",
                status: "warning",
                position: "top-center",
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        dispatch(addRestaurantDetailsAPI(formData));
    };
    return (
        <Flex>
            <Box pt={"50px"}>

                <Grid
                    templateColumns="repeat(2, 1fr)"
                    gap={6}
                    maxW="container.lg"
                    m={"auto"}
                    mt={"10"}
                >
                    {data &&
                        data.length > 0 &&
                        data.map((el, i) => (
                            <GridItem key={i}>
                                <Flex gap={2}>
                                    <Box w={"100px"} minW="100px">
                                        <div>
                                            <Image src={el.poster} width={"200px"} />
                                        </div>
                                    </Box>
                                    <Box>
                                        <Heading as={"h3"}>{el.title}</Heading>
                                        <Divider />
                                        <Flex>
                                            <Box minWidth={"90px"}>Directed by:</Box>
                                            <Box>{el.director}</Box>
                                        </Flex>
                                        <Flex>
                                            <Box minWidth={"90px"}>Year:</Box>
                                            <Box> {el.year}</Box>
                                        </Flex>
                                        <Flex>
                                            <Box minWidth={"90px"}>Fenre:</Box>
                                            <Box>{el.genre}</Box>
                                        </Flex>
                                        <Flex>
                                            <Box minWidth={"90px"}>IMDB Rating:</Box>
                                            <Box>{el.IMDB_Rating}</Box>
                                        </Flex>
                                        <Flex>
                                            <Box minWidth={"90px"}>Cost:</Box>
                                            <Box>{el.ticket}</Box>
                                        </Flex>
                                        <Button colorScheme={"whatsapp"}>Book Now</Button>
                                    </Box>
                                </Flex>
                            </GridItem>
                        ))}
                </Grid>
            </Box>
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
                                        <FormLabel>Poster Image</FormLabel>
                                        <Input
                                            type="url"
                                            name="poster"
                                            value={formData.poster}
                                            onChange={handleOnChange}
                                            placeholder="Enter Poster Image"
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
                                        <FormLabel>Director</FormLabel>
                                        <Input
                                            type="text"
                                            name="director"
                                            value={formData.director}
                                            onChange={handleOnChange}
                                            placeholder="Enter Director"
                                            required
                                        />
                                    </FormControl>
                                    <FormControl id="year">
                                        <FormLabel>Year</FormLabel>
                                        <Input
                                            type="number"
                                            name="year"
                                            value={formData.year}
                                            onChange={handleOnChange}
                                            placeholder="Enter year"
                                            required
                                        />
                                    </FormControl>
                                </Flex>
                                <Flex gap={5}>
                                    <FormControl id="genre">
                                        <FormLabel>Genre</FormLabel>
                                        <Select
                                            name="genre"
                                            value={formData.genre}
                                            placeholder="Choose Genre"
                                            size="md"
                                            onChange={handleOnChange}
                                            required
                                        >
                                            <option value="Action">Action</option>
                                            <option value="Comedy">Comedy</option>
                                            <option value="Horror">Horror</option>
                                            <option value="Year">Year</option>
                                        </Select>
                                    </FormControl>
                                    <FormControl id="rating">
                                        <FormLabel>IMDB_Rating</FormLabel>
                                        <Input
                                            type="number"
                                            name="IMDB_Rating"
                                            value={formData.IMDB_Rating}
                                            onChange={handleOnChange}
                                            placeholder="Enter IMDB_Rating"
                                            required
                                        />
                                    </FormControl>
                                </Flex>
                                <FormControl id="ticket">
                                    <FormLabel>Ticket Cost</FormLabel>
                                    <Input
                                        type="number"
                                        name="ticket"
                                        value={formData.ticket}
                                        onChange={handleOnChange}
                                        placeholder="Enter ticket"
                                        required
                                    />
                                </FormControl>

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