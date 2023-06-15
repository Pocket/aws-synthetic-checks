# aws-synthetic-checks

AWS re-usable synthetic uptime &amp; graphql operation checks stored in S3

## Local Development

### Fresh Setup

Clone the repo:

-   `git clone git@github.com:Pocket/aws-synthetic-checks.git`
-   `cd aws-synthetic-check`

To compile AWS infra:

-   `cd .aws`
-   `npm ci`
-   `npm run build:dev`

To build and create zip file with synthetic code:

-   `cd aws-synthetic-check`
-   `npm ci`
-   `npm run build:local`

The created zip file `aws-synthetic.zip` will be located in `tmp-dist/synthetics-export`

To run canary code locally:

TODO - `Synthetics` package is not available on `npm`, which means that we cannot test our canary code locally. Workaround is to declare a `TypeScript` `Synthetics` module
and leverage that for local testing.
