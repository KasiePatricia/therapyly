![Therapyly logo](https://i.postimg.cc/QdFhXt2r/therapy-logo.png)

# Therapyly

## Introduction:

**Therapyly** is a mental health and wellness platform that connects you with licensed therapists for online counseling sessions. Whether you're seeking help for a specific issue or just want to improve your overall well-being, our app provides a confidential and convenient way to get the support you need.

## Features:

- Connect with licensed therapists in real-time, from anywhere
- Choose from a variety of therapists specializing in different areas, such as anxiety, depression, relationship issues, and more
- Book and manage appointments, including rescheduling or canceling, all from the app
- Access to a library of resources, including articles, videos, and tools to help you practice self-care and manage your mental health
- Ability to sign up and sign in as a client or therapist

## Getting Started:

To get started with **Therapyly**, simply download the app from the App Store or Google Play Store and create an account. From there, you can browse available therapists, book appointments, and start your therapy journey.

## Privacy & Security:

Your _privacy_ and _security_ are our top priorities. All sessions are encrypted and confidential, and we adhere to strict security and privacy standards to protect your information.

## Tools Used:

- React Js
- Vite Js
- Tailwindcss
- DaisyUI
- Node Js
- Express
- Mongodb

## Color Reference

| Color                | Hex                                                              |
| -------------------- | ---------------------------------------------------------------- |
| Therapy Dark Green   | ![#325343](https://via.placeholder.com/10/325343?text=+) #325343 |
| Therapy Light Green  | ![#9BD58B](https://via.placeholder.com/10/9BD58B?text=+) #9BD58B |
| Therapy Light Yellow | ![#DFF5AB](https://via.placeholder.com/10/DFF5AB?text=+) #DFF5AB |
| Therapy Green        | ![#F4F5F8](https://via.placeholder.com/10/F4F5F8?text=+) #F4F5F8 |
| Therapy Green        | ![#438766](https://via.placeholder.com/10/438766?text=+) #438766 |

## The Pages

### The Landing page

![Landing Page](https://i.postimg.cc/fyPq5wBx/landing-page.png)

### Sign up page

![Sign up Page](https://i.postimg.cc/B4Dzr2RQ/sign-up.png)

### Sign in page

![Sign in Page](https://i.postimg.cc/BQq2wWdF/sign-in.png)

### Dashboard

![Dashboard](https://i.postimg.cc/Ch5nHNxJ/dashboard.png)

### Booking History

![Booking History](https://i.postimg.cc/yscVLgP0/booking-history.png)

### Frequently Asked Question

![FAQ](https://i.postimg.cc/4JkKY5L2/faq.png)

## Deployment

To deploy this project run

```bash
  yarn run dev
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Visionvoice2023/therapy-app.git
```

Go to the project directory

```bash
  cd therapy-app
```

Install dependencies

```bash
  yarn install
  npm install
```

Start the server

```bash
  yarn dev
```

## Contact Us:

If you have any questions or need help getting started, please don't hesitate to contact us.

## Authors

- [Chile Omereji](https://github.com/chile4coding)
- [Obieze Ezeugo Felistus](https://github.com/Felistus)
- [Ejibode Ibraheem](https://github.com/Linsmed)
- [Kasie Ugwu](https://github.com/KasiePatricia)
- [Adetaj](https://github.com/adetaj)
- [Chidalu](https://github.com/daluclemas)

## Hosted Link:

[**Therapyly**](https://therapy-app.vercel.app)

## The Therapyly App API Endpoints and backend

### User signup

'https://apitherapy-production.up.railway.app/usersignup'

```bash
method: "POST"
input values
name, email, password:
```

=======================================================

### user login

'https://apitherapy-production.up.railway.app/userlogin'

```bash
method: "POST"
input values
email, password
validation
password must be at least six characters
email must be in email format
```

=======================================================

### Therapist signup

'https://apitherapy-production.up.railway.app/therapistsignup'

```bash
method: "POST"
input values
name, email,password, location, liscense, specialty

validation
password must be at least six characters
email must be in email format
loaction , license, specialty must not be empty
```

==========================================================

### Therapist login

'https://apitherapy-production.up.railway.app/tharapistlogin'

```bash
method: "POST"
input values
email, password
```

=========================================================

### Therapist / client user dashboard

'https://apitherapy-production.up.railway.app/dashboard'

```bash
method: "GET"
input values
headers: “Bearer “ + token
```

==========================================================

### Booking appointment

'https://apitherapy-production.up.railway.app/bookappointment'

```bash
method: "POST"
input values

Hearder token
username ,therapistname ,therapistId , meetingType , disorderType, appointmentTime , therapistEmail , userEmail , day, DOB, phoneNumber, description

Authentication
route protected
```

==============================================

### Profile picture upload

'https://apitherapy-production.up.railway.app/uploadImage'

```bash
method: "POST"
input values
token
image file
```

### Authentication

route protected
code example

```bash
const url = " https://apitherapy-production.up.railway.app/uploadImage"
fetch(url, {
headers: "Bearer " + token // there must be a space after the Bearer string
body: formData
})
```

### Client confirm registration

'https://apitherapy-production.up.railway.app/usersignupconfirm'

```bash
method: "POST"
input values
OTP: string
```

============================================================

### Therapist sign up confirmation

Same a client confirmation

'https://apitherapy-production.up.railway.app/therapistconfirmsignup'

### Client user onboarding

'https://apitherapy-production.up.railway.app/useronboarding'

```bash
method: "POST"
input values
hobbies, stateOforigin, marriageStatus
```

### Therapist user onboarding

' https://apitherapy-production.up.railway.app/therapistonboarding'
Same as client user onboarding

When the client user / therapist onboard the boarded field is activated which will enable the user to login

#### Client user profile updates

https://apitherapy-production.up.railway.app/edituserptofile

```bash
method: “PUT”
input values
email, name, location
headers: Bearer + token
```

============================================================

### Therapist user profile updates

https://apitherapy-production.up.railway.app/edittherapistprofile

```bash
method: “PUT”
input values
email, name, location, specialty, liscense
headers: Bearer + token
```

=============================================================

### Send frequently asked question

https://apitherapy-production.up.railway.app/sendfaq

```bash
input values
email, name, message, questionType
method: “POST”
```

=====================================================

### Get frequently asked questions

'https://apitherapy-production.up.railway.app/getfaqs'

### Get sessions booked by a user

'https://apitherapy-production.up.railway.app/getsessions'

```bash
method: “GET”
headers : ‘Bearer ‘ + token
```

### Get All therapists

https://apitherapy-production.up.railway.app/getTherapists

```bash
method: “GET”
headers : ‘Bearer ‘ + token
```

We hope you find the support and care you need through **Therapyly**.
