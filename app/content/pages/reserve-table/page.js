'use client'
import React, {useContext, useEffect, useState} from "react";
import { useFormik } from "formik";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../../../hook/useSubmit";
import {useAlertContext} from "../../../context/alertContext";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../../../context/authContext";

const ReserveTable = (onSubmit) => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const {user} = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      date: "",
      time: "17:00",
      no_of_guests: "1 - 2 persons",
      occasion:"Birthday",
      notes:"",
    },
    onSubmit: (value) => {
      axios.post('http://localhost:3001/Reservation_guest', value)
      submit(value);
    },
    validationSchema: Yup.object({
      Name: Yup.string("Name must not be empty").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      notes: Yup.string()
      .min(10, "Must be 10 characters at minimum")
      .required("Required"),
      time: Yup.string().required("Please select available time"),
      no_of_guests: Yup.string().required("Please select number of quests"),
      occasion: Yup.string().required("Please select occasion"),
    }),
  });
    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if(response.type === 'success'){
                formik.resetForm();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

  const [startDate, setStartDate] = useState(new Date());
  const sleep = ms => new Promise(r => setTimeout(r, ms))
  const handleSubmit = async values => {
    await sleep(500)
    onSubmit(values)
    }

  return (
    <Box
      backgroundColor="rgba(255, 165, 0, 0.5)"
      justifyContent="center"
      alignItems="flex-start"
      display="flex"
      onSubmit={handleSubmit}
      id="main-page"
      w="100%"
    >
      {!user? (
        <Alert
          status='error'
          justifyContent='center'
          minH='60vh'
          display={{base:"flex",md:"flex",lg:"flex"}}
          flexDir={{base:'column', md:'row', lg:'row'}}
        >
          <AlertIcon />
          <AlertTitle>You're not logged in!</AlertTitle>
          <AlertDescription>Please login to reserve a table.</AlertDescription>
        </Alert>
      ) : (
      <VStack w="1024px" p={10} zIndex={0}>
        <Heading as="h1" fontSize={{base: "25px", md: "30px", lg:"36px"}} pb={4}>
          Reserve a Table
        </Heading>
        <Box p={4} rounded="xl" width={{base: "100%", md: "50%", lg:"50%"}} backgroundColor="rgba(255, 165, 0, 0.8)">
          <form onSubmit={formik.handleSubmit} display="flex">
            <VStack spacing={6}>
              <FormControl isInvalid={!!formik.errors.Name && formik.touched.Name}>
              <FormLabel htmlFor="Name">Name</FormLabel>
              <Input
                id="Name"
                name="Name"
                {...formik.getFieldProps("Name")}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.7" }}
              />
                <FormErrorMessage>{formik.errors.Name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7" }}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="datepicker">Choose date</FormLabel>
                <DatePicker
                  type="date" id="res-date" name="date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  {...formik.getFieldProps("date")}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="timepicker">Choose time</FormLabel>
                  <Select id="res-time" name="time" style={{width:"100%", textAlign:"center", backgroundColor:"rgba(255, 255, 255, 0.7)"}} {...formik.getFieldProps("time")} required>
                    <option disabled>--select time--</option>
                    <option>17:00</option>
                    <option>17:30</option>
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                  </Select>
                  <FormErrorMessage>{formik.errors.time},</FormErrorMessage>
                </FormControl>
              <FormControl isInvalid={!!formik.errors.no_of_guests && formik.touched.no_of_guests}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                  <Select id="guests" name="no_of_guests" style={{width:"100%", textAlign:"center", backgroundColor:"rgba(255, 255, 255, 0.7)"}} {...formik.getFieldProps("no_of_guests")} required>
                    <option disabled>--select no of guests--</option>
                    <option>1 - 2 persons</option>
                    <option>3 - 4 persons</option>
                    <option>5 - 6 persons</option>
                    <option>7 - 8 persons</option>
                    <option>9 - 10 persons</option>
                    <option>more than 11 persons</option>
                    <FormErrorMessage>{formik.errors.no_of_guests}</FormErrorMessage>
                  </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                  <Select id="occasion" name="occasion" style={{width:"100%", textAlign:"center", backgroundColor:"rgba(255, 255, 255, 0.7)"}} {...formik.getFieldProps("occasion")} required>
                    <option disabled>--select occasion--</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Family Gathering</option>
                    <option>Corporate event</option>
                    <option>Other</option>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                  </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.notes && formik.touched.notes}>
                <FormLabel htmlFor="notes">Add notes</FormLabel>
                <Textarea
                  id="notes"
                  name="notes"
                  height={100}
                  {...formik.getFieldProps("notes")}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                />
                <FormErrorMessage>{formik.errors.notes}</FormErrorMessage>
              </FormControl>
              <Button type="submit" disabled={!(formik.isValid && formik.dirty)} colorScheme="orange" width="full" isLoading={isLoading} loadingText='Submitting'>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
      )}
    </Box>
  );
};

export default ReserveTable;

