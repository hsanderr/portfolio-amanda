from PIL import Image

def find_smallest_dimensions(image_paths):
    # Initialize with the dimensions of the first image
    smallest_width, smallest_height = Image.open(image_paths[0]).size

    for path in image_paths[1:]:
        width, height = Image.open(path).size
        # Update smallest dimensions if necessary
        smallest_width = min(smallest_width, width)
        smallest_height = min(smallest_height, height)

    return smallest_width, smallest_height

def crop_images_to_common_size(image_paths, output_paths):
    # Find the smallest dimensions among the input images
    smallest_width, smallest_height = find_smallest_dimensions(image_paths)

    for i in range(len(image_paths)):
        input_image = Image.open(image_paths[i])
        
        # Calculate the coordinates for cropping to the common size
        left = (input_image.width - smallest_width) // 2
        upper = (input_image.height - smallest_height) // 2
        right = left + smallest_width
        lower = upper + smallest_height

        # Crop the image
        cropped_image = input_image.crop((left, upper, right, lower))

        # Save the cropped image to a new file
        cropped_image.save(output_paths[i])

if __name__ == "__main__":
    input_image_paths = ["vinheta-colagem.png", "vinheta-curta-tv.png", "vinheta-resumindo.png", "vinheta-tipografia-variada.png"]
    output_image_paths = ["vinheta-colagem-crop.png", "vinheta-curta-tv-crop.png", "vinheta-resumindo-crop.png", "vinheta-tipografia-variada-crop.png"]

    crop_images_to_common_size(input_image_paths, output_image_paths)
