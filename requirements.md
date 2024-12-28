# Models

# Home Page
- Logo and Quote
- Hero Section Video
- Statistics
- Who we are brief summary
- What we do brief summary

# Testimonials

# Good Quotes
1. **text**: The actual quote (String, required).
2. **author**: Name of the person who said the quote (String, required).
3. **source**: Where the quote is from (e.g., book, speech) (String, optional).
4. **category**: Type of quote (e.g., inspiration, motivation) (String, optional).
5. **createdAt**: Timestamp of when the quote was added (Date, default: current date).
6. **createdBy**: The user who added the quote (String, optional).

# mission-wise gallery
1. **imageUrl**: URL of the picture (String, required).
2. **caption**: Description or caption for the picture (String, optional).
3. **mission**: The mission associated with the picture (String, required).
4. **createdAt**: Timestamp of when the picture was uploaded (Date, default: current date).
5. **createdBy**: User who uploaded the picture (String, optional).

# Recognition - Awards, Newspaper Highlights, and other Recognition:
1. **title**: Name of the award or recognition (String, required).
2. **type**: Type of recognition (e.g., award, newspaper highlight, other) (String, required).
3. **description**: Short text (50-100 words) describing the recognition (String, required).
4. **date**: Date of the recognition or award (Date, required).
5. **imageUrl**: URL of related image, certificate, or clipping (String, optional).
6. **createdAt**: Timestamp of when the recognition was added (Date, default: current date).
7. **createdBy**: User who added the recognition (String, optional).

# Ancillary Pages - : **Terms of Use**, **Privacy Policy**, and any other legal pages
1. **title**: Title of the legal page (e.g., Terms of Use, Privacy Policy) (String, required).
2. **content**: Full text or HTML content of the page (String, required).
3. **lastUpdated**: Date when the page was last updated (Date, default: current date).
4. **createdBy**: User/admin who created the page (String, optional).
5. **status**: Page status (e.g., active, inactive, draft) (String, optional).
6. **version**: Version of the legal document (String, optional).

### 1. Good Quotes
- **Quote Text**: The actual quote (required).
- **Author**: Who said the quote (required).
- **Source**: Where the quote comes from (like a book or speech) (optional).
- **Category**: Type of quote (like inspiration or motivation) (optional).
- **Date Added**: When the quote was added (automatically filled).
- **Added By**: Who added the quote (optional).

### 2. Mission-wise Gallery
- **Image URL**: The link to the picture (required).
- **Caption**: A short description of the picture (optional).
- **Mission**: The mission related to the picture (required).
- **Date Uploaded**: When the picture was uploaded (automatically filled).
- **Uploaded By**: Who uploaded the picture (optional).

### 3. Recognition (Awards, Newspaper Highlights, and Other Recognition)
- **Title**: Name of the award or recognition (required).
- **Type**: What kind of recognition it is (like an award or newspaper highlight) (required).
- **Description**: A brief summary (50-100 words) about the recognition (required).
- **Date**: When the recognition was given (required).
- **Image URL**: Link to any related image or certificate (optional).
- **Date Added**: When the recognition was added (automatically filled).
- **Added By**: Who added the recognition (optional).

### 4. Ancillary Pages (Terms of Use, Privacy Policy, etc.)
- **Title**: The name of the legal page (like "Terms of Use" or "Privacy Policy") (required).
- **Content**: Full text or details of the page (required).
- **Last Updated**: When the page was last updated (automatically filled).
- **Created By**: Who created the page (optional).
- **Status**: Whether the page is active, inactive, or a draft (optional).
- **Version**: The version number of the document (optional). 

the hope house admin
# verify-form
ref={(ref) => {
inputRefs.current[index] = ref;
}}   
# nav-menu
<!-- <Link -->
href="#"
# horizontal-menu
<!-- <Link -->
href={'#'}
# comment all <AddBlock />
# breadcrumbs.tsx
aria-current={ariaCurrent || undefined} // Handle null properly
# sharp installation
# .gitignore
    # Local Netlify folder
    .netlify
