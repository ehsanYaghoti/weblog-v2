# Requirements
Requirements define the functional and non-functional expectations that the system must satisfy.

## Functional Requirements

### Authentication

#### Registration

- Users can create an account.
- Email must be unique.
- Passwords must comply with the application's password policy.
- User receives email verification.

#### Login

- Users can login with email or phone number.
- Users can login with password or token (from email or sms).
- OAuth Authentication
- Remember me.
- Logout.

#### Forgot password

- Users can authenticate with tokens and reset password.


### Authorization

- there is permissions and roles based on that like author , admin , ...
- users can have one or many roles


#### media (article or podcast)

- guest users can read article or listen to podcasts.
- Authenticated users can create posts to ask questions or publish their own articles.
- Authenticated users can react to articles.
- Authenticated users can rate articles.
- Authenticated users can post comments and like comments and reply to comments.

### Following

- Users can follow authors.
- Users receive notifications when followed authors publish new content.
- Users can follow tags.
- Users receive notifications for followed tags.
- Users can filter content by followed tags.


### Bookmarks

- Users can bookmark articles.
- Users can organize bookmarks into custom collections.
- A default "Read Later" collection is provided.
- Users can receive reminders for bookmarked content.


#### Comments

- Create comment
- Reply
- Edit own comment
- Delete own comment
- Like comment
- Report comment



### Media Management

- Create media (article or podcast)
- Edit media (article or podcast)
- Delete media (article or podcast)
- Trash media (article or podcast)
- Save draft
- Publish media (article or podcast)
- Schecdule publish
- Upload cover image
- Rich text editor


## Non-functional Requirements


### Performance

- API responses should support pagination.
- Large lists should use lazy loading or pagination.
- The website must load within 2 seconds.
- The application must support SEO.
- The application must be responsive.
- TypeScript strict mode must be enabled.
- I18N support.
- Images must be optimized.
- The UI must support dark mode and system mode.
- API responses should support pagination.
- Large lists should use lazy loading or pagination.


### Security

- User input must be validated.
- Passwords must be hashed.
- Sensitive information must not be exposed to the client.
- Secure to SQL injection and XSS attacks.
- The application must authenticate users securely.
- Passwords must be hashed.


### Accessibility

- All interactive elements must be keyboard accessible.
- Images must include descriptive alternative text.
- Accessibility should meet WCAG AA.

### Error Handling

- Users must receive meaningful error messages.
- Unexpected errors must not expose sensitive information.
