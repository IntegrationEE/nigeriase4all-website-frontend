# Nigeria SE4ALL Main Website including the Webmap

Nigeria SE4ALL offers the most accurate data and latest tools that empower better electrification planning in Nigeria.
This repo represents the Frontend of the Nigeria SE4ALL website, which seperately hosts a webmap on three different levels (national, state, village) on rural electrification. The website is developed by INTEGRATION environment & energy, Reiner Lemoine Institut gGmbH and Alsino Skowronnek and financed by Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) and the Federal Ministry of Power, Works and Housing under the Nigerian Energy Support Programme (Co-funded by the German Government and the European Union).
The current repo is built on top of Strapi as a headless CMS, which is used to manage the content of the website and the webmap. The frontend is built with Angular and TypeScript, and the styling is done with SCSS and Bootstrap.
---

## Public Instances
- [Nigeria SE4ALL Website](https://nigeriase4all.gov.ng/)

---

## Financed By
- [Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)](https://www.giz.de/)
- [Federal Ministry of Power, Works and Housing](http://www.power.gov.ng)
- under the Nigerian Energy Support Programme
- (Co-funded) by the German Government and the European Union

---

## Authors and Developed By
- [INTEGRATION environment & energy](http://www.integration.org/)
- [Reiner Lemoine Institut gGmbH](http://www.reiner-lemoine-institut.de)
- [Alsino Skowronnek](http://www.alsino.io)

---

## Feature List
- Detailed project overview of Nigerian rural electrification under the NESP
- Webmap on three different levels (national, state, village) on rural electrification
- Fully dynamic filters on all datasets
- Ground-truth electrification/building data
- Download all public datasets via a dedicated Geonode instance

---

## Architecture
- Angular
- TypeScript
- SCSS
- Bootstrap

---

## License
This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). For more details, please refer to the LICENSE file in this repository.

## Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm

### Installation

1. Clone this repository:

```bash
git clone https://github.com/your-org/nigeriase4all-website-frontend.git
cd nigeriase4all-website-frontend
```

2. Install the dependencies:

```bash
npm install
```

3. Configure API credentials:

Create a file `src/app/services/charts-api-sec.ts` based on the example file:

```bash
cp src/app/services/charts-api-sec.example.ts src/app/services/charts-api-sec.ts
```

Then edit `charts-api-sec.ts` with your actual API credentials.

4. Start the development server:

```bash
npm start
```

5. Navigate to the application at:

```bash
http://localhost:4200/
```

### Building for Production

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

If you want to copy the build to the backend public directory:

```bash
npm run build:backend
```
