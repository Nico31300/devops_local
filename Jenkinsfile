@Library('piper-lib-os') _
node() {
    stage('prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }
    
    stage('Test')   {
	  karmaExecuteTests script: this, verbose:true
    }
    
    stage('build') {
        mtaBuild script: this
    }
    
    stage('uploadToTransportRequest') {
        transportRequestUploadFile(
            script: this,
            changeDocumentId: '0000046989',   // typically provided via git commit history
            transportRequestId: 'WEAK900370' // typically provided via git commit history
        )
    }
}
