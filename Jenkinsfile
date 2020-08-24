@Library('piper-lib-os') _
node() {
    stage('prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }
    
    stage('Test')   {
	  karmaExecuteTests script: this,
		            installCommand: "npm config set strict-ssl false && npm config set @sap:registry https://npm.sap.com && npm install --quiet && npm install -g karma-cli"
    }
}
