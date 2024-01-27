'use client'
import React, {useContext, useState} from "react";
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
  Select,
  Spinner,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AuthContext from "../../../context/authContext";

const ReserveTable = () => {
  const {user} = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      date: startDate.toISOString().split('T')[0],
      time: "- select time -",
      no_of_guests: "- select number of guests -",
      occasion: "- select an occasion -",
      notes: "",
    },
    onSubmit: async (values) => {
      try {
        // Fetch data first
        const fetchDataResponse = await fetch('https://fays-dalgona.onrender.com/Reservation_guest');
        if (!fetchDataResponse.ok) {
          throw new Error(`Failed to fetch data. Status: ${fetchDataResponse.status}`);
        }
        const reservations = await fetchDataResponse.json();

        // Process data and prepare payload for POST request
        const lastId = reservations[reservations.length - 1].id;
        const newId = Number(lastId) + 1;
        const postReservationData = {
          id: newId,
          name: user?.user_metadata.full_name,
          email: user?.email || "NA",
          date: values.date, // Use the selected date from the form
          time: values.time, // Use the selected time from the form
          no_of_guests: values.no_of_guests,
          occasion: values.occasion,
          notes: values.notes,
        };

        // Perform POST request
        const postResponse = await fetch("https://fays-dalgona.onrender.com/Reservation_guest", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postReservationData),
        });

        if (postResponse.ok) {
          // Reset Formik form after successful submission
          setStartDate(new Date());
          formik.resetForm();

          // You can add other logic here after successful submission
          // For example, show a success message using onOpen from useAlertContext
          // onOpen('success', 'Reservation submitted successfully.');
        } else {
          alert("Error submitting reservation. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);

        // Handle error, and optionally show an error message using onOpen
        // onOpen('error', 'An error occurred while submitting the reservation.');
      }
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Please select a date"),
      time: Yup.string().notOneOf(["- select time -"], "Please select a time").required("Please select a time"),
      no_of_guests: Yup.string().notOneOf(["- select number of guests -"], "Please select the number of guests").required("Please select the number of guests"),
      occasion: Yup.string().notOneOf(["- select an occasion -"], "Please select an occasion").required("Please select an occasion"),
      notes: Yup.string().min(10, "Must be 10 characters at minimum").required("Must be 10 characters at minimum"),
    }),
  });
  return (
    <Box
      backgroundColor="rgba(200, 165, 0, 0.5)"
      justifyContent="center"
      alignItems="flex-start"
      display="flex"
      id="Reservation-page"
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
      <VStack w="1024px" p={2.5} zIndex={0}>
        <Heading as="h1" fontSize={{base: "25px", md: "30px", lg:"36px"}} pb={4} color="orange.600">
          Reserve a Table
        </Heading>
        <Box p={4} rounded="xl" width={{base: "100%", md: "50%", lg:"50%"}} backgroundColor="rgba(249, 233, 214, 0.8)">
          <form onSubmit={formik.handleSubmit} display="flex">
            <VStack spacing={6}>
              <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="datepicker">Choose date</FormLabel>
                  <DatePicker
                    type="date"
                    id="res-date"
                    name="date"
                    showIcon
                    toggleCalendarOnIconClick
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      const formattedDate = date.toISOString().split('T')[0];
                      formik.setFieldValue('date', formattedDate);
                    }}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy" // Set the desired date format
                    disabled={formik.isSubmitting}
                  />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="timepicker">Choose time</FormLabel>
                <Select
                  id="res-time"
                  name="time"
                  style={{width:"100%", textAlign:"center", backgroundColor:"rgba(255, 255, 255, 0.7)"}}
                  {...formik.getFieldProps("time")}
                  required
                  disabled={formik.isSubmitting}
                >
                  <option disabled>- select time -</option>
                  <option>17:00</option>
                  <option>17:30</option>
                  <option>18:00</option>
                  <option>18:30</option>
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                </Select>
                {formik.touched.time && (
                  <Text mt={1} fontStyle="italic" color="red.500">
                    {formik.errors.time}
                  </Text>
                )}
              </FormControl>
              <FormControl isInvalid={!!formik.errors.no_of_guests && formik.touched.no_of_guests}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Select
                  id="guests"
                  name="no_of_guests"
                  style={{width:"100%", textAlign:"center", backgroundColor:"rgba(255, 255, 255, 0.7)"}}
                  {...formik.getFieldProps("no_of_guests")}
                  required
                  disabled={formik.isSubmitting}
                >
                  <option disabled>- select number of guests -</option>
                  <option>1 - 2 persons</option>
                  <option>3 - 4 persons</option>
                  <option>5 - 6 persons</option>
                  <option>7 - 8 persons</option>
                  <option>9 - 10 persons</option>
                  <option>more than 11 persons</option>
                </Select>
                {formik.touched.no_of_guests && (
                  <Text mt={1} fontStyle="italic" color="red.500">
                    {formik.errors.no_of_guests}
                  </Text>
                )}
              </FormControl>
              <FormControl isInvalid={!!formik.errors.occasion && formik.touched.occasion}>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select
                  id="occasion"
                  name="occasion"
                  style={{width:"100%", textAlign:"center", backgroundColor:"rgba(255, 255, 255, 0.7)"}}
                  {...formik.getFieldProps("occasion")}
                  required
                  disabled={formik.isSubmitting}
                >
                  <option disabled>- select an occasion -</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Engagement</option>
                  <option>Family Gathering</option>
                  <option>Corporate event</option>
                  <option>Other</option>
                </Select>
                {formik.touched.occasion && (
                  <Text mt={1} fontStyle="italic" color="red.500">
                    {formik.errors.occasion}
                  </Text>
                )}
              </FormControl>
              <FormControl isInvalid={!!formik.errors.notes && formik.touched.notes}>
                <FormLabel htmlFor="notes">Add notes</FormLabel>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Add any additional notes here..."
                  height={100}
                  {...formik.getFieldProps("notes")}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                  disabled={formik.isSubmitting}
                />
                {formik.touched.notes && (
                  <Text mt={1} fontStyle="italic" color="red.500">
                    {formik.errors.notes}
                  </Text>
                )}
              </FormControl>
              <Button
                type="submit"
                disabled={formik.isSubmitting}
                colorScheme="orange"
                isLoading={formik.isSubmitting}
                loadingText="Submitting"
                width="full"
              >
                {formik.isSubmitting ? (
                  <>
                    Submitting <Spinner size="sm" ml={2} />
                  </>
                ) : (
                  "Submit"
                )}
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

