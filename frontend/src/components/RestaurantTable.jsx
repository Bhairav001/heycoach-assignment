import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Image,
    Table,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRestaurantDetailsAPI, getRestaurantDetailsAPI } from "../store/action";
import EditDetails from "./EditDetails";

const RestaurantTable = () => {
  const {
    data,
    movie: { loading, error },
  } = useSelector((state) => state);
  console.log("allData", data, loading, error);
  const toast = useToast();

  let dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log("id", id);
    dispatch(deleteRestaurantDetailsAPI(id));
  };

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getRestaurantDetailsAPI());
    }
  }, [data]);

  return (
    <Box pb={"30px"}>
      <TableContainer
        maxWidth={"container.xl"}
        background={"white"}
        m={"auto"}
        boxShadow={"md"}
        rounded={"md"}
      >
        <Table size="md">
          <Thead>
            <Tr>
              <Th>Id</Th>
               <Th>Image</Th>
              <Th>Restaurant Name</Th>
              <Th>Address</Th>
              <Th>Contact Details</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.length > 0 &&
              data.map((el, i) => (
                <Tr _hover={{ background: "gray.100" }} key={i}>
                  <Td>{el.id}</Td>
                   <Image src={el.poster} width={"50%"}/>
                  <Td>{el.title}</Td>
                  <Td>{el.director}</Td>
                  <Td>{el.year}</Td>
                   <Td>
                    <EditDetails element={el} />
                  </Td> 
                  <Td>
                    <Button
                      size={"sm"}
                      title={"delete"}
                      onClick={() => handleDelete(el.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RestaurantTable;
