@Library('piper-lib-os') _
node() {
    stage('prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }
    
    stage('Test')   {
	  karmaExecuteTests script: this,
		            installCommand: "npm install --quiet",
		  	    runCommand : "npm run karma"
    }
}
