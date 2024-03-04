# Welcome to node-mail-sender !

node-mail-sender is a versatile Node.js package that simplifies email sending tasks by providing easy-to-use functions for sending emails in HTML, template (with dynamic values), and plain text formats. Whether you need to send beautifully formatted HTML emails, dynamic template emails with personalized content, or simple text emails.

# Features

-   **Send HTML Emails:** Send visually appealing emails with HTML content using the SendHtmlMail function.
-   **Send Template Emails:** Create dynamic template emails with placeholders for dynamic values such as user names, order details, or personalized messages, using the SendTemplate function.

-   **Send Plain Text Emails:** Send simple text emails using the SendTextMail function for straightforward communication needs.

-   **Easy Integration:** Integrate mail-sender seamlessly into your Node.js applications to handle all your email sending requirements effortlessly.

-   **Customization:** Customize email content, sender, recipient, subject, and other parameters according to your specific needs.

## Usage

1] **SendTemplate (from, password, to, subject, viewpath, body, context, callback)**

The `SendTemplate` function is a utility provided by the mail-sender package, designed to simplify the process of sending dynamic template emails with personalized content. This function enables users to send template emails using Handlebars (.hbs) files, providing flexibility in email content customization

**Parameters:**

-   `from` (String): The email address of the sender.
-   `password` (String): The password or app password associated with the sender's email account. Note that this is not the exact mail password but a generated app password provided by the email service provider.
-   `to` (String or Array of Strings): The email address(es) of the recipient(s). If sending to multiple recipients, provide an array of email addresses.
-   `subject` (String): The subject line of the email.
-   `viewpath` (String): The path to the folder containing the Handlebars (.hbs) files used as email templates.
-   `body` (String): The name of the Handlebars (.hbs) file to be used as the email template.
-   `context` (Object): An object containing dynamic values to be injected into the template. These values will replace placeholders defined in the template file.
-   `callback` (Function): A callback function to handle errors and success states. It should accept two parameters: `err` (Error) and `success` (Boolean). If an error occurs during the email sending process, `err` will contain the error object, otherwise, `success` will be `true`.


> **Steps for generating password :** 
> 
> 1.  Log in to your email account.
> 2.  Access account settings or security settings.
> 3.  Locate app passwords or third-party access.
> 4.  Generate a new app password.
> 5.  Select the app or device.
> 6.  Copy or note the app password.
> 7.  Use the app password in your application.
> 8.  Save and test the settings.

For a visual guide on how to generate an app password for your email account, watch this YouTube video: [Generate App Password Tutorial.](https://www.youtube.com/watch?v=lSURGX0JHbA)

Consider Below Example : 

![enter image description here](https://res.cloudinary.com/dexratgkq/image/upload/v1709573143/mailglide/sa0k4knjfmzyqi65yfok.png)

demo.hbs

    <!DOCTYPE html>
    <html lang="en">
	    <head>
		    <meta charset="UTF-8">
		    <meta name="viewport"  content="width=device-width, initial-scale=1.0">
		    <title>Document</title>
	    </head>
	    <body>
		    <h1>{{name}}</h1>
		    <h5>{{message}}</h5>
	    </body>
    </html>
    
**Handlebars Documentation Reference:**

**Description:** For comprehensive information and detailed usage guidelines on Handlebars, the templating engine used in this package, please refer to the official Handlebars documentation.
index.js

**Link:** [Handlebars Documentation](https://handlebarsjs.com/)

Handlebars is a popular templating language that allows you to create dynamic HTML templates with ease. By referring to the official documentation, you can explore the full range of features, syntax, helpers, and best practices for effectively using Handlebars in your projects.

**Usage Example:**
    
    SendTemplate(
	    'xyz@gmail.com', // from
	    'app_password', // password
	    'abc@gmail.com', // to
	    'Dynamic Template Email', // subject
	    './Emails', // path of .hbs files directory
	    'demo', // .hbs file name
	    {  name:  'John',  message:  'Hello, World!' }, // data that you want to send dynamically
	    (err,  success)  => { // callback function
		    if (err) {
			    console.error('Error sending template email:',  err);
			} else {
				console.log('Template email sent successfully');
			}
		}
	);
	
Output (MAIL) : 
	
 ![enter image description here](https://res.cloudinary.com/dexratgkq/image/upload/v1709573788/mailglide/c22xkp81tdw2mggahlmx.png)


2] **SendHtmlMail Function:**

**Description:** The `SendHtmlMail` function is a utility provided by the mail-sender package, designed to simplify the process of sending HTML emails. This function allows users to send emails with custom HTML content, making it suitable for sending visually appealing and formatted emails.

**Parameters:**

-   `from` (String): The email address of the sender.
-   `password` (String): The password or app password associated with the sender's email account. Note that this is not the exact mail password but a generated app password provided by the email service provider.
-   `to` (String or Array of Strings): The email address(es) of the recipient(s). If sending to multiple recipients, provide an array of email addresses.
-   `subject` (String): The subject line of the email.
-   `body` (String): The HTML content of the email. This can be either a string containing HTML code or the path to an HTML file.
-   `callback` (Function): A callback function to handle errors and success states. It should accept two parameters: `err` (Error) and `success` (Boolean). If an error occurs during the email sending process, `err` will contain the error object, otherwise, `success` will be `true`.

**Usage Example:**

    const { SendHtmlMail } = require('mailglide');
    
    // Sending HTML email with inline HTML content
    SendHtmlMail(
        'sender@example.com',
        'app_password',
        'recipient@example.com',
        'HTML Email Example',
        '<p>Hello, <strong>World!</strong></p>',
        (err, success) => {
            if (err) {
                console.error('Error sending HTML email:', err);
            } else {
                console.log('HTML email sent successfully');
            }
        }
    );`

Or : 

    const { SendHtmlMail } = require('mailglide');
    
    // Sending HTML email with content from an HTML file
    SendHtmlMail(
        'sender@example.com',
        'app_password',
        'recipient@example.com',
        'HTML Email Example',
        '/path/to/email-template.html',
        (err, success) => {
            if (err) {
                console.error('Error sending HTML email:', err);
            } else {
                console.log('HTML email sent successfully');
            }
        }
    );

3] **SendTextMail Function:**

**Description:** The `SendTextMail` function is a utility provided by the mail-sender package, designed to simplify the process of sending plain text emails. This function allows users to send emails with simple text content, suitable for straightforward communication needs.

**Parameters:**

-   `from` (String): The email address of the sender.
-   `password` (String): The password or app password associated with the sender's email account. Note that this is not the exact mail password but a generated app password provided by the email service provider.
-   `to` (String or Array of Strings): The email address(es) of the recipient(s). If sending to multiple recipients, provide an array of email addresses.
-   `subject` (String): The subject line of the email.
-   `body` (String): The plain text content of the email.
-   `callback` (Function): A callback function to handle errors and success states. It should accept two parameters: `err` (Error) and `success` (Boolean). If an error occurs during the email sending process, `err` will contain the error object, otherwise, `success` will be `true`.

**Usage Example:**

    const { SendTextMail } = require('mailglide');
    
    // Sending text email
    SendTextMail(
        'sender@example.com',
        'app_password',
        'recipient@example.com',
        'Text Email Example',
        'Hello, World!',
        (err, success) => {
            if (err) {
                console.error('Error sending text email:', err);
            } else {
                console.log('Text email sent successfully');
            }
        }
    );


## GitHub Repository 
Find the source code and contribute to the development of Nodejs-CoreKit on GitHub: (https://github.com/darshan-balar2400/mailglide)

## License 
This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).


