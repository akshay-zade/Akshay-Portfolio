import MailchimpSubscribe from "react-mailchimp-subscribe"
import { Newsletter } from "./Newsletter"

import React from 'react'

export const MailchimpForm = () => {

    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?U=${process.env.REACT_APP_MAILCHIMP_U}$id={process.env.REACT_APP_MAILCHIMP_ID}`

  return (
    <MailchimpSubscribe
     url={postUrl}
     render={({ subscribe , stutus , massage})=>(
        <Newsletter
        status={stutus}
        message={massage}
        onValidated={formData => subscribe(formData)}
        />
     )}
     />

  )
}

