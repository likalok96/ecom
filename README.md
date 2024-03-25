# How to build it
All of the style and layout is coded in pure css. The frontend is built using React.js and deployed to google app engine.</br>
The <a href="https://github.com/likalok96/ecom_backend" target="_blank">backend</a> is built using Nodejs with Express, MySQL, Stripe and JWT auth for refresh token.

# Improvement
### css
- Not using css variable for theme style. Hard for color change as it requires to rewrite for every classes.
- Only using media query but not attributes (e.g. width: clamp(), grid minmax template).
- Not using sass or less.
- Using px instead of rem for size.
  
# HTML
- Not using semantic tag.

# React
- Some Hooks are related to others which make the code hard to follow.
- Whole Product list is fetched when loading to pages. (Not a problem in this website as list is small.)
  Used TanStack query for caching to prevent fetching on every navigation.
  


