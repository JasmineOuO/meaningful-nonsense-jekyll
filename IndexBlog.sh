echo "Uncommenting Elasticsearch and Searchyll Configs"
sed -i '/^#.*searchyll/s/^#//' _config.yml
sed -i '/^#.*elasticsearch/s/^#//' _config.yml
sed -i '/^#.*index_name/s/^#//' _config.yml
sed -i '/^#.*searchyll/s/^#//' Gemfile

echo "Installing Searchyll packages"
bundle install
echo "Building Jekyll Site with Bonsai"
read -r bonsaikey < credentials.txt
echo "Using $bonsaikey"
BONSAI_URL=$bonsaikey bundle exec jekyll build

echo "Commenting out Elasticsearch and Searchyll Configs"
sed -i '/searchyll/s/^/#/g' _config.yml
sed -i '/elasticsearch/s/^/#/g' _config.yml
sed -i '/index_name/s/^/#/g' _config.yml
sed -i '/searchyll/s/^/#/g' Gemfile

echo "Uninstalling Searchyll packages"
bundle install
echo "Building Jekyll Site to Production"
JEKYLL_ENV=production bundle exec jekyll build
