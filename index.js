const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// const commands = [{
//   name: 'ping',
//   description: 'Replies with Pong!'
// }]; 

// const rest = new REST({ version: '9' }).setToken('token');

// (async () => {
//   try {
//     console.log('Started refreshing application (/) commands.');

//     await rest.put(
//       Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
//       { body: commands },
//     );

//     console.log('Successfully reloaded application (/) commands.');
//   } catch (error) {
//     console.error(error);
//   }
// })();


let AWS = require('aws-sdk'),
    region = "ap-southeast-1",
    secretName = "arn:aws:secretsmanager:ap-southeast-1:758240761501:secret:axiemp-pricewatch-bot-l5kBDK",
    secret,
    decodedBinarySecret;

// Create a Secrets Manager client
let client = new AWS.SecretsManager({
    region: region
});



(async () => {
  try {
   let data = await client.getSecretValue({SecretId: secretName};

        // Decrypts secret using the associated KMS CMK.
        // Depending on whether the secret is a string or binary, one of these fields will be populated.
        if ('SecretString' in data) {
            secret = data.SecretString;
        } else {
            let buff = new Buffer(data.SecretBinary, 'base64');
            decodedBinarySecret = buff.toString('ascii');
        }
 
    // Your code goes here. 
});
  } catch (err) {
     if (err.code === 'DecryptionFailureException')
            // Secrets Manager can't decrypt the protected secret text using the provided KMS key.
            // Deal with the exception here, and/or rethrow at your discretion.
            throw err;
        else if (err.code === 'InternalServiceErrorException')
            // An error occurred on the server side.
            // Deal with the exception here, and/or rethrow at your discretion.
            throw err;
        else if (err.code === 'InvalidParameterException')
            // You provided an invalid value for a parameter.
            // Deal with the exception here, and/or rethrow at your discretion.
            throw err;
        else if (err.code === 'InvalidRequestException')
            // You provided a parameter value that is not valid for the current state of the resource.
            // Deal with the exception here, and/or rethrow at your discretion.
            throw err;
        else if (err.code === 'ResourceNotFoundException')
            // We can't find the resource that you asked for.
            // Deal with the exception here, and/or rethrow at your discretion.
            throw err;
  }
})();


