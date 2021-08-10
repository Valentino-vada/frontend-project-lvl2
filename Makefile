install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

watch:
	npx jest --watch

test-coverage:
	npm test -- --coverage --coverageProvider=v8