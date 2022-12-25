@echo off
cd Client
call npm run build
xcopy "dist" "../Production/dist" /e /i /y

cd ../
call dotnet publish -c Release
cd SpaWithApiOnSameDomain/bin/Release/net6.0/publish
xcopy  .  "../../../../../Production" /e /i /y