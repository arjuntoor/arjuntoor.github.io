# -*- mode: ruby -*-
# vi: set ft=ruby :

required_plugins = %w( vagrant-proxyconf )
required_plugins.each do |plugin|
  system "vagrant plugin install #{plugin}" unless Vagrant.has_plugin? plugin
end

Vagrant.configure("2") do |config|

  # Setup the BT proxy
  if Vagrant.has_plugin?("vagrant-proxyconf")
    config.proxy.http       = ""
    config.proxy.https      = ""
    config.proxy.no_proxy   = ""
  end

  config.vm.box = "bento/centos-7.3"
  
  config.vm.provider "virtualbox" do |vb|
   vb.memory = "1024"
   vb.customize ['modifyvm', :id, '--cableconnected1', 'on']
  end


  # provisioning
  # curl --silent --location https://rpm.nodesource.com/setup_6.x | sudo bash -
  # sudo yum install -y nodejs

end
