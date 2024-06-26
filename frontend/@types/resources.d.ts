interface Resources {
  "users": {
    "me": {
      "h1": "Profile Name",
      "title": "Profile",
      "description": "This is your profile",
      "name": "Name",
      "email": "Email",
      "submit": "Save"
    }
  }
  "auth": {
    "register": {
      "h1": "Sign Up",
      "title": "Sign Up",
      "text": "Already have an account? <1>Sign in</1>",
      "submit": "Sign Up",
      "description": "Sign up for an account"
    },
    "login": {
      "h1": "Sign In",
      "title": "Sign In",
      "description": "Sign in to your account",
      "text": "Don't have an account? <1>Sign up</1>",
      "submit": "Sign In"
    }
  },
  "client-page": {
    "back-to-home": "Back to home",
    "counter_one": "one selected",
    "counter_other": "{{count}} selected (other)",
    "counter_zero": "none selected (zero)",
    "h1": "A client page, to demonstrate client side i18n ({{lng}})",
    "title": "Client page ({{lng}})",
    "to-second-client-page": "to second client page ({{lng}})"
  },
  "footer": {
    "description": "This is a non-page component that requires its own namespace",
    "helpLocize": "With using <1>locize</1> you directly support the future of <3>i18next</3>.",
    "languageSwitcher": "Switch from <1>{{lng}}</1> to: "
  },
  "second-client-page": {
    "back-to-home": "Back to home",
    "h1": "A second client page, to demonstrate client side i18n",
    "title": "Second client page"
  },
  "second-page": {
    "back-to-home": "Back to home",
    "h1": "A second page, to demonstrate routing",
    "title": "Second page"
  },
  "translation": {
    "h1": "A simple example",
    "title": "Home",
    "to-client-page": "To client page",
    "to-second-page": "To second page",
    "welcome": "Welcome to Next.js 13 <1>with the new app directory features</1> and i18next",
    "blog": {
      "title": "Title Blog",
      "text": "Check out the corresponding <1>blog post</1> describing this example.",
      "link": "https://locize.com/blog/next-app-dir-i18n/"
    }
  }
}

export default Resources;
