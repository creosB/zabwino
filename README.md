# Zabwino Deals

[![Artists Company](https://raw.githubusercontent.com/creosB/presentation/main/background.png)](https://artistscompany.net/)

## Zabwino Deals: A Simple Classified Ad Listing Site for Malawian Users

Zabwino Deals is a classified ad listing site designed for the people of Malawi. On this platform, users can engage with sellers through chat or become sellers themselves. The site's database is powered by MongoDB, which handles data storage for chats, categories, reviews, and more. All uploaded photos are stored on Cloudinary.

[![sponsor](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/creos)

### Key Features

- User Registration and Login: Users can register and log in to buy or sell items. Phone number is required during registration.

- Reporting and Reviews: Buyers can submit reports and reviews, which impact their reputation on the site.

- Notifications: Sellers and buyers receive notifications with sound when they receive reviews or messages.

- Product Listings: Sellers can provide details such as location, category, condition, name, price, and upload small-sized photos for their listings.

- Approval Process: All listings require approval. Administrators can approve, deny, or add new locations and categories via the admin panel without the need to access the database directly.

- Favorites: Users can add products to their favorites list, which they can view on their profile.

- Profile Editing: Users can edit their name (not username, as it's disabled), profile photo, email, phone number, and password.

- Seller Dashboard: In the seller dashboard, users can track the status of their products, whether they are under review, denied, or approved.

### Additional Information

- Platform Testing: This project has been tested on render.com and Windows Server 2019.

- Windows Server 2019 Setup: If you plan to use Windows Server 2019, you need to enable WebSockets and URL forwarding. For example, you can set up URL forwarding with the pattern "(.*)" to redirect to "http://localhost:8000/{R:1}".

- Production Environment: In the production environment, the backend and frontend work together seamlessly.
For better GitHub markdown formatting, you can present the environment variable setup instructions as follows:

### Environment Variable Configuration

#### Backend Setup

In the root folder of the project, create a `.env` file and define the following variables:

```env
CONNECTION_URL=
PORT=8000
JWT_SECRET=JKDFKJU43809445aHUH3IUHUI
NODE_ENV=production
CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

These environment variables are essential for configuring the backend of the application.

#### Client Setup

In the client folder, create an `.env` file with the following example variable:

```env
REACT_APP_API=http://localhost:8000/api
```

This environment variable is required to set up the client-side of the application and should point to the API endpoint.

# Site Images

Here are various images showcasing different aspects of the Zabwino Deals website:

#### 1. Main Page
![Main Page](https://raw.githubusercontent.com/creosB/zabwino/main/images/mainpage.png)

#### 2. Admin Panel
![Admin Panel](https://raw.githubusercontent.com/creosB/zabwino/main/images/admin%20panel.png)

#### 3. User Dashboard
![User Dashboard](https://raw.githubusercontent.com/creosB/zabwino/main/images/user%20dashboard.png)

#### 4. Post Product
![Post Product](https://raw.githubusercontent.com/creosB/zabwino/main/images/post%20product.png)

#### 5. Postman API Test
![Postman API Test](https://raw.githubusercontent.com/creosB/zabwino/main/images/postman%20test.png)

#### 6. Chat
![Chat](https://raw.githubusercontent.com/creosB/zabwino/main/images/chat.png)

#### 7. Notification
![Notification](https://raw.githubusercontent.com/creosB/zabwino/main/images/notification.png)

#### 8. Register
![Register](https://raw.githubusercontent.com/creosB/zabwino/main/images/register.png)

#### 9. Login
![Login](https://raw.githubusercontent.com/creosB/zabwino/main/images/login.png)

#### 10. Update Information
![Update Information](https://raw.githubusercontent.com/creosB/zabwino/main/images/update%20information.png)

#### 11. Profile
![Profile](https://raw.githubusercontent.com/creosB/zabwino/main/images/profile.png)

#### 12. Database
![Database](https://raw.githubusercontent.com/creosB/zabwino/main/images/mongodb.png)

#### 13. Rate
![Rate](https://raw.githubusercontent.com/creosB/zabwino/main/images/rate.png)

#### 14. Add to Favorites
![Add to Favorites](https://raw.githubusercontent.com/creosB/zabwino/main/images/add%20to%20favorites.png)

#### 15. Footer
![Footer](https://raw.githubusercontent.com/creosB/zabwino/main/images/footer.png)

#### 15. Under Construction Page (example)
![Construction](https://raw.githubusercontent.com/creosB/zabwino/main/images/under%20construction.png)

These images provide a visual insight into the different aspects of the Zabwino Deals website.

# License
***
## Please contact me first to share or make changes anywhere.

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
***



Zabwino Deals is your go-to platform for classified ads in Malawi, providing a user-friendly experience for both buyers and sellers.
