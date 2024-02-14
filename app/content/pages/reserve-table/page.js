'use client'
import { db } from "../../../firebase.config";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
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
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
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
import { NotifAlert } from "../menu/styled_menu";
import { MdCheck } from "react-icons/md";

const ReserveTable = () => {
  const {
    user,
    showNotif,
    setShowNotif
  } = useContext(AuthContext);

  const [startDate, setStartDate] = useState(new Date());
  const [showTicket, setShowTicket] = useState(false);
  const [reservationData, setReservationData] = useState({}); // Add state to hold reservation data
  const today = new Date();
  let isSelectedDate;

  const parseDate = (dateString) => {
    // Check if dateString is not null or undefined
    if (!dateString) {
      return null;
    }
    // Create a new Date object and parse the dateString
    const dateObject = new Date(dateString);
    // Check if the dateObject is valid
    if (isNaN(dateObject.getTime())) {
      // If the dateObject is not valid, return null
      return null;
    }
    // Format the date as desired
    const formattedDate = dateObject.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    console.log('Original Date:', dateString);
    console.log('Formatted Date:', formattedDate);
    return formattedDate;
  };

  React.useEffect(() => {
    if (showNotif) {
      const timer = setTimeout(() => {
        setShowNotif(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    fetchReservationData();
    // const fetchReservationData = async () => {
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "reservations"));
    //     querySnapshot.forEach((doc) => {
    //       const reservation = doc.data();
    //       if (reservation.name === user?.user_metadata.full_name && reservation.email === user?.email) {
    //         setReservationData({
    //           name:reservation.name,
    //           email: reservation.email,
    //           selectedDate: reservation.date,
    //           selectedTime: reservation.time,
    //           selectedNumberOfGuests: reservation.no_of_guests,
    //           selectedOccasion: reservation.occasion,
    //           selectedNotes: reservation.notes,
    //         });
    //         setShowTicket(true);
    //       }
    //     });
    //   } catch (error) {
    //     console.error("Error fetching reservations:", error);
    //   }
    // };
  }, [showNotif, setShowNotif, user?.user_metadata.full_name]);

  const fetchReservationData = async () => {
    try {
      const now = new Date();
      const querySnapshot = await getDocs(collection(db, "reservations"));
      querySnapshot.forEach((doc) => {
        const reservation = doc.data();
        // Check if the reservation belongs to the current user
        if (
          reservation.name === user?.user_metadata.full_name &&
          reservation.email === user?.email
        ) {
          const reservationDateTime = new Date(reservation.date + 'T' + reservation.time);
          // Ensure both current date/time and reservation date/time are valid
          if (!isNaN(now.getTime()) && !isNaN(reservationDateTime.getTime())) {
            // Compare dates
            if (now <= reservationDateTime) {
              setReservationData({
                name: reservation.name,
                email: reservation.email,
                selectedDate: reservation.date,
                selectedTime: reservation.time,
                selectedNumberOfGuests: reservation.no_of_guests,
                selectedOccasion: reservation.occasion,
                selectedNotes: reservation.notes,
              });
              setShowTicket(true);
            } else {
              // Reservation date has passed
              console.log("Reservation date has passed");
            }
          } else {
            // Handle invalid dates
            console.error("Invalid date format");
          }
        }
      });
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  // React.useEffect(() => {
  //   if (showNotif) {
  //     const timer = setTimeout(() => {
  //       setShowNotif(false);
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  //   fetch("https://fays-dalgona.onrender.com/Reservation_guest")
  //   .then(response => response.json())
  //   .then(data => {
  //     const userSelectedReservation = data.find(obj => obj.name === user?.user_metadata.full_name && obj.email === user?.email);
  //     if (userSelectedReservation) {
  //       console.log("Reservation Data:", {
  //         selectedDate: userSelectedReservation.date,
  //         isSelectedDate: today <= parseDate(userSelectedReservation.date),
  //         selectedTime: userSelectedReservation.time,
  //         selectedNumberOfGuests: userSelectedReservation.no_of_guests,
  //         selectedOccasion: userSelectedReservation.occasion,
  //         selectedNotes: userSelectedReservation.notes,
  //       });
  //       setReservationData({
  //         selectedDate: userSelectedReservation.date,
  //         isSelectedDate: today <= parseDate,
  //         selectedTime: userSelectedReservation.time,
  //         selectedNumberOfGuests: userSelectedReservation.no_of_guests,
  //         selectedOccasion: userSelectedReservation.occasion,
  //         selectedNotes: userSelectedReservation.notes,
  //       });
  //       setShowTicket(true);
  //     } else {
  //       console.log("User not found or no reservation date available.");
  //     }
  //   })
  //   .catch(error => {
  //     console.error("Error fetching Testimonials:", error);
  //   });
  // }, [showNotif, setShowNotif, user?.user_metadata.full_name]);

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
        // Construct reservation data
        const postData = {
          name: user?.user_metadata.full_name,
          email: user?.email || "NA",
          date: values.date,
          time: values.time,
          no_of_guests: values.no_of_guests,
          occasion: values.occasion,
          notes: values.notes,
        };
        // Add reservation to Firestore collection
        const docRef = await addDoc(collection(db, "reservations"), postData);
        if (docRef.id) {
          // Handle success
          setShowNotif(true);
          setStartDate(new Date());
          setShowTicket(true);
        } else {
          // Handle error
          alert("Error submitting reservation. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
    // onSubmit: async (values) => {
    //   try {
    //     // Fetch data first
    //     const fetchDataResponse = await fetch('https://fays-dalgona.onrender.com/Reservation_guest');
    //     if (!fetchDataResponse.ok) {
    //       throw new Error(`Failed to fetch data. Status: ${fetchDataResponse.status}`);
    //     }
    //     const reservations = await fetchDataResponse.json();
    //     const lastId = reservations[reservations.length - 1].id;
    //     const newId = Number(lastId) + 1;
    //     const postReservationData = {
    //       id: newId,
    //       name: user?.user_metadata.full_name,
    //       email: user?.email || "NA",
    //       date: values.date, // Use the selected date from the form
    //       time: values.time, // Use the selected time from the form
    //       no_of_guests: values.no_of_guests,
    //       occasion: values.occasion,
    //       notes: values.notes,
    //     };
    //     // Perform POST request
    //     const postResponse = await fetch("https://fays-dalgona.onrender.com/Reservation_guest", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(postReservationData),
    //     });
    //     if (postResponse.ok) {
    //       setShowNotif(true);
    //       setStartDate(new Date());
    //       setShowTicket(true);
    //       // formik.resetForm();
    //     } else {
    //       alert("Error submitting reservation. Please try again.");
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // },
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
      backgroundColor="rgba(255, 255, 255, 0.6)"
      justifyContent="center"
      alignItems="flex-start"
      display="flex"
      id="Reservation-page"
      w="100%"
    >
      {!user ? (
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
        <VStack w="100%" p={2.5} zIndex={0}>
          <Heading as="h1" fontSize={{base: "25px", md: "30px", lg:"36px"}} pb={4} mt={4} color="orange.600">
            Reserve a Table
          </Heading>
          <Box p={4} mb={8} rounded="xl" width={{base: "100%", md: "50%", lg:"50%"}} backgroundColor="rgba(252, 106, 53, .4)" boxShadow="2px 10px 15px rgba(0, 0, 0, 0.3)">
          {reservationData && showTicket ? (
            <VStack width="100%">
              <Heading as="h3" fontSize={{base: "15px", md: "19px", lg:"23px"}} pb={4} color="red.600" letterSpacing={1}>
                Here's your reservation ticket:
              </Heading>
              <VStack alignItems="flex-start" fontSize={{base: "13px", md: "15px", lg:"16px"}} bgColor="gray.300" p={4} w="100%" letterSpacing={1}>
                <Text>
                  <b>Name</b>: {reservationData.name}
                </Text>
                <Text>
                  <b>Email</b>: {reservationData.email}
                </Text>
                <Text>
                  <b>Reservation Date</b>: {parseDate(reservationData.selectedDate)}
                </Text>
                <Text>
                  <b>Reservation Time</b>: {reservationData.selectedTime}
                </Text>
                <Text>
                  <b>Number of Guests</b>: {reservationData.selectedNumberOfGuests}
                </Text>
                <Text>
                  <b>Occasion</b>: {reservationData.selectedOccasion}
                </Text>
                <Text>
                  <b>Notes</b>: {reservationData.selectedNotes}
                </Text>
              </VStack>
              <VStack fontSize={{base: "13px", md: "14px", lg:"15px"}} mt={4}>
                <List spacing={1}>
                  <ListItem>
                    <HStack alignItems='flex-start'>
                      <ListIcon as={MdCheck} color="green.700" />
                      <p>Print this ticket and bring it with you to the restaurant.</p>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems='flex-start'>
                      <ListIcon as={MdCheck} color="green.700" />
                      <p>Come at least 5 minutes before the reservation time.</p>
                      </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems='flex-start'>
                      <ListIcon as={MdCheck} color="green.700" />
                      <p>You can only reserve one table at a time per user account.</p>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems='flex-start'>
                      <ListIcon as={MdCheck} color="green.700" />
                      <p>This ticket will automatically expire after the reservation date. You can reserve again after the expiration date.</p>
                    </HStack>
                  </ListItem>
                </List>
              </VStack>
              <Text fontSize={{base: "14px", md: "15px", lg:"16px"}} mt={4} color="red.800" letterSpacing={1}>
                Thank you for your reservation!
              </Text>
            </VStack>
          ):(
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
                    {...formik.getFieldProps('time')}
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
                  variant="outline"
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
          )}

          {/* {!showTicket ? (
            !isSelectedDate ? (
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
                      {...formik.getFieldProps('time')}
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
                    variant="outline"
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
            ) : ( reservationData && (
              <VStack width="100%">
                <Heading as="h3" fontSize={{base: "15px", md: "19px", lg:"23px"}} pb={4} color="red.600" letterSpacing={1}>
                  Here's your reservation ticket:
                </Heading>
                <VStack alignItems="flex-start" fontSize={{base: "13px", md: "15px", lg:"16px"}} bgColor="gray.300" p={4} w="100%" letterSpacing={1}>
                  <Text>
                    <b>Name</b>: {user?.user_metadata.full_name}
                  </Text>
                  <Text>
                    <b>Email</b>: {user?.email}
                  </Text>
                  <Text>
                    <b>Reservation Date</b>: {parseDate(reservationData.selectedDate)}
                  </Text>
                  <Text>
                    <b>Reservation Time</b>: {reservationData.selectedTime}
                  </Text>
                  <Text>
                    <b>Number of Guests</b>: {reservationData.selectedNumberOfGuests}
                  </Text>
                  <Text>
                    <b>Occasion</b>: {reservationData.selectedOccasion}
                  </Text>
                  <Text>
                    <b>Notes</b>: {reservationData.selectedNotes}
                  </Text>
                </VStack>
                <VStack fontSize={{base: "13px", md: "14px", lg:"15px"}} mt={4}>
                  <List spacing={1}>
                    <ListItem>
                      <HStack alignItems='flex-start'>
                        <ListIcon as={MdCheck} color="green.700" />
                        <p>Print this ticket and bring it with you to the restaurant.</p>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack alignItems='flex-start'>
                        <ListIcon as={MdCheck} color="green.700" />
                        <p>Come at least 5 minutes before the reservation time.</p>
                        </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack alignItems='flex-start'>
                        <ListIcon as={MdCheck} color="green.700" />
                        <p>You can only reserve one table at a time per user account.</p>
                      </HStack>
                    </ListItem>
                    <ListItem>
                      <HStack alignItems='flex-start'>
                        <ListIcon as={MdCheck} color="green.700" />
                        <p>This ticket will automatically expire after the reservation date. You can reserve again after the expiration date.</p>
                      </HStack>
                    </ListItem>
                  </List>
                </VStack>
                <Text fontSize={{base: "14px", md: "15px", lg:"16px"}} mt={4} color="red.800" letterSpacing={1}>
                  Thank you for your reservation!
                </Text>
              </VStack>
            )
            )
          ) : ( reservationData && (
            <VStack width="100%">
              <Heading as="h3" fontSize={{base: "15px", md: "19px", lg:"23px"}} pb={4} color="red.600" letterSpacing={1}>
                Here's your reservation ticket:
              </Heading>
              <VStack alignItems="flex-start" fontSize={{base: "13px", md: "15px", lg:"16px"}} bgColor="gray.300" p={4} w="100%" letterSpacing={1}>
                <Text>
                  <b>Name</b>: {user?.user_metadata.full_name}
                </Text>
                <Text>
                  <b>Email</b>: {user?.email}
                </Text>
                <Text>
                  <b>Reservation Date</b>: {parseDate(reservationData.selectedDate)}
                </Text>
                <Text>
                  <b>Reservation Time</b>: {reservationData.selectedTime}
                </Text>
                <Text>
                  <b>Number of Guests</b>: {reservationData.selectedNumberOfGuests}
                </Text>
                <Text>
                  <b>Occasion</b>: {reservationData.selectedOccasion}
                </Text>
                <Text>
                  <b>Notes</b>: {reservationData.selectedNotes}
                </Text>
              </VStack>
              <VStack fontSize={{base: "13px", md: "14px", lg:"15px"}} mt={4}>
                <List spacing={1}>
                  <ListItem>
                    <HStack alignItems='flex-start'>
                      <ListIcon as={MdCheck} color="green.700" />
                      <p>Print this ticket and bring it with you to the restaurant.</p>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems='flex-start'>
                      <ListIcon as={MdCheck} color="green.700" />
                      <p>Come at least 5 minutes before the reservation time.</p>
                      </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems='flex-start'>
                      <ListIcon as={MdCheck} color="green.700" />
                      <p>You can only reserve one table at a time per user account.</p>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack alignItems='flex-start'>
                      <ListIcon as={MdCheck} color="green.700" />
                      <p>This ticket will automatically expire after the reservation date. You can reserve again after the expiration date.</p>
                    </HStack>
                  </ListItem>
                </List>
              </VStack>
              <Text fontSize={{base: "14px", md: "15px", lg:"16px"}} mt={4} color="red.800" letterSpacing={1}>
                Thank you for your reservation!
              </Text>
            </VStack>
          )
          )} */}
          </Box>
        </VStack>
      )
      }
      {showNotif && (
        <NotifAlert>
          <HStack m={2}>
            <AlertIcon />
            <AlertTitle>Thank you!</AlertTitle>
          </HStack>
          <AlertDescription textAlign="center">You've reserved a table and your reservation ticket has been issued.</AlertDescription>
        </NotifAlert>
      )}
    </Box>
  );
};

export default ReserveTable;

