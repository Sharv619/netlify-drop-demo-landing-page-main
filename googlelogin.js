//Google Login Plugin
function handleCredentialResponse(response) {
  if (response.credential) {
    // Get the access token from the response
    const accessToken = response.credential;
    //RequiredAPI

    window.location.href = "/your-desired-page";
  } else {
    console.error("Login failed!");
  }
}
google.accounts.id.initialize({
  client_id: "YOUR_GOOGLE_CLIENT_ID",
  scope: "profile email",
  callback: handleCredentialResponse
});


//Facebook login plugin 
  function handleLoginResponse(response) {
    if (response.status === "connected") {
      // Get access token from the response
      const accessToken = response.authResponse.accessToken;
      // Use the access token to call the Facebook API
      // ... your API call logic here using fetch or axios ...
      // Redirect to your desired page after successful login
      window.location.href = "/your-desired-page";
    } else {
      console.error("Login failed!");
    }
  }

