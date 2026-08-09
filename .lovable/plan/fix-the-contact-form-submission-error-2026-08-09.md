# Fix the contact form submission error

## What's wrong

The form posts to `https://splitforms.com`, which is the marketing website, not the submission API. That URL only accepts GET/HEAD, so the browser request fails outright (confirmed: it returns "Method Not Allowed", and the preview network log shows "Failed to fetch"). Every submission therefore falls into the error branch.

The working endpoint is `https://splitforms.com/api/submit` — confirmed to accept JSON POSTs and to allow browser (cross-origin) requests.

## The fix

In the contact page:

1. Change the endpoint constant to `https://splitforms.com/api/submit`.
2. Keep the existing JSON body (`access_key`, name, email, subject, work, message) and the success/clear/fade behaviour already in place.
3. Read the JSON response and treat `success: false` as a failure too, so a rejected access key shows the error message instead of a false "sent" confirmation.
4. Show the service's own message when it returns one (e.g. an invalid access key), falling back to the current bilingual "email the studio directly" text.

## Note on the access key

The service rejects keys that aren't a *form* access key. If submissions still report an invalid key after this change, copy the access key from the specific form in the SplitForms dashboard (not the account/API token) and I'll swap it in.

## Technical detail

Single file change: `src/routes/contact.tsx` — endpoint constant and the `handleSubmit` response handling. No backend or new dependency required.
