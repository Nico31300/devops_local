@Library('piper-lib-os') _
node() {
    stage('prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }
    
    stage('Test')   {
	  karmaExecuteTests script: this, verbose:true,
		            installCommand: "sh 'pwd' && npm config set @sap:registry https://npm.sap.com && npm install --quiet"
	    script 
	    {
		    sh 'pwd'
	    }
    }
}
