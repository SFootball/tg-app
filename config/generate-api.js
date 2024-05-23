import { execSync } from "child_process";

const FOLDER_PATH = "./src/shared/api/swagger";
const SWAGGER_DOC_URL = "http://localhost:5050/docs/spec.json"

// const OPEN_API_GENERATE_SCRIPT = `yarn openapi-generator-cli generate -i ${SWAGGER_DOC_URL} -g typescript-fetch -o ${FOLDER_PATH} --skip-validate-spec --additional-properties=useSingleRequestParameter=true`;
const OPEN_API_GENERATE_SCRIPT = `yarn openapi-generator-cli generate -i ${SWAGGER_DOC_URL} -g typescript-axios -o ${FOLDER_PATH}  --skip-validate-spec  --additional-properties=useSingleRequestParameter=true`



class ApiGenerator {

	generate = () => {
		const apiGenerateScript = OPEN_API_GENERATE_SCRIPT;
		execSync(apiGenerateScript, { stdio: [0, 1, 2] })

		return this;
	};
}

new ApiGenerator().generate();

