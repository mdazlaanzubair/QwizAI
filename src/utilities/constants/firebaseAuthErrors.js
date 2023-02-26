const fbAuthErrors = {
  "auth/wrong-password": "The password is invalid for the given email",
  "auth/invalid-email": "The email address is not valid.",
  "auth/user-not-found": "There is no user corresponding to the given email.",
  "auth/email-already-in-use":
    "There is already an account registered with this email address.",
  "auth/operation-not-allowed":
    "This account is disabled due to violation of policies.",
  "auth/weak-password": "The password is not strong enough.",
  "auth/account-exists-with-different-credential":
    "There is already an account registered with this email address.",
  "auth/user-disabled":
    "The user corresponding to the given email has been disabled due to violation of the policy.",
  "auth/user-mismatch": "The credential given does not correspond to the user.",
  "auth/invalid-credential": "The credential is not valid.",
  "auth/invalid-verification-code":
    "The verification code of the credential is not valid.",
  "auth/invalid-verification-id":
    "The verification ID of the credential is not valid.",
  "auth/operation-not-allowed": "Anonymous accounts are not allowed.",
  "auth/expired-action-code": "OTP in email link expires.",
};

export default fbAuthErrors;
