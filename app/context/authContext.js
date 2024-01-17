import { createContext, useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
  stars: Array(5).fill(0),
  currentRating: 0,
  hoverRating: undefined,
  rateMenu: false,
  showAlert: false,
  showNotif: false,
  isSubmitting: false,
  feedbackValue: '',
  menuPic: '',
  menuName: '',
  handleRateMenu: () => {},
  handleSubmit: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [stars, setStars] = useState(Array(5).fill(0));
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(undefined);
  const [rateMenu, setRateMenu] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackValue, setFeedbackValue] = useState('');
  const [menuPic, setMenuPic] = useState('');
  const [menuCategory, setMenuCategory] = useState('');
  const [menuName, setMenuName] = useState('');
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);

  useEffect(() => {
    netlifyIdentity.on('login', user => {
    setUser(user);
    netlifyIdentity.close();
    console.log('login event');
  })

  netlifyIdentity.on('close', () => {
    console.log('Netlify Identity modal closed');
  });

  netlifyIdentity.on('logout', () => {
    setUser(null);
    netlifyIdentity.close();
    console.log('logout event');
  })

  netlifyIdentity.on('init', (user) => {
    setUser(user);
    setAuthReady(true);
    console.log('init event');
  })
  netlifyIdentity.init();

  return () => {
    netlifyIdentity.off('login');
    netlifyIdentity.off('logout');
  }
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  }

  const handleRateMenu = (e) => {
    if (user) {
      e.preventDefault();
      setRateMenu(true);
    } else {
      setShowAlert(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    fetch("https://fays-dalgona.onrender.com/Testimonials")
      .then(response => response.json())
      .then(testimonials => {
        const lastId = testimonials[testimonials.length - 1].id;
        const newId = lastId + 1;
        const postData = {
          id: newId,
          name: user?.user_metadata.full_name,
          prof_pic: user?.user_metadata.avatar_url || "avatar.jpg",
          email: user?.email || "NA",
          menu_pic: menuPic,
          menu_category: menuCategory,
          menu_name: menuName,
          star_rating: currentRating,
          review: feedbackValue
        };
        return fetch("https://fays-dalgona.onrender.com/Testimonials", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
        });
      })
      .then(postResponse => {
        if (postResponse.ok) {
          setIsSubmitting(false);
          setShowNotif(true);
          setRateMenu(false);
          setFeedbackValue("");
          setCurrentRating(0);
        } else {
          alert("Error submitting feedback. Please try again.");
          setIsSubmitting(false);
          setRateMenu(false);
          setFeedbackValue("");
          setCurrentRating(0);
        }
        return postResponse.json();
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Error submitting feedback. Please try again.");
      });
  };

  // const scrollToTopHomePage = () => {
  //   const page = document.getElementById("Home-page");
  //   if (page) {
  //     page.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // }
  // const scrollToTopPage = () => {
  //   const pageIds = [
  //     "Menu-page",
  //     "Testimonials-page",
  //     "About-page",
  //     "Reservation-page",
  //   ];
  //   pageIds.forEach((pageId) => {
  //     const page = document.getElementById(pageId);
  //     if (page) {
  //       page.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   });
  // }

  const scrollToTop = (pageId) => {
    const page = document.getElementById(pageId);
    if (page) {
      page.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToTopSubPage = () => {
    const page = document.getElementById("Sub-page");
      if (page) {
        page.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  }

  const context = {
    user,
    login,
    logout,
    authReady,
    // scrollToTopHomePage,
    // scrollToTopPage,
    scrollToTop,
    scrollToTopSubPage,
    stars,
    setStars,
    currentRating,
    setCurrentRating,
    hoverRating,
    setHoverRating,
    rateMenu,
    setRateMenu,
    showAlert,
    setShowAlert,
    showNotif,
    setShowNotif,
    isSubmitting,
    setIsSubmitting,
    feedbackValue,
    setFeedbackValue,
    menuPic,
    setMenuPic,
    menuCategory,
    setMenuCategory,
    menuName,
    setMenuName,
    handleRateMenu,
    handleSubmit,
    showLeftChevron,
    showRightChevron,
    setShowLeftChevron,
    setShowRightChevron
  }

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;